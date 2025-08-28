import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "axios";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const IMAGE_BB_API_KEY = "23a138a6c5d51c6d71a87f91af3d9fe1";

const EditWritingTask = ({ taskId }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const router = useRouter();
  const editorRef = useRef(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/writing-task/${taskId}`
        );
        setTask(data.data);
      } catch (error) {
        toast.error("Failed to fetch writing task");
      } finally {
        setLoading(false);
      }
    };

    if (taskId) fetchTask();
  }, [taskId]);

  const handleImageUpload = async (file) => {
    setImageOptimizing(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Send image to your backend for uploading to Cloudinary
      const res = await axios.post(
        "http://localhost:5000/api/v1/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure correct content-type for file upload
          },
        }
      );

      if (res.data.success) {
        const imageData = {
          imageURL: res.data.data.imageUrl, // The uploaded image URL
          imageDeleteURL: res.data.data.imageDeleteURL, // If you need to handle delete URLs (if you implement delete functionality)
        };
        setImageURL(imageData.imageURL);
        setImageDeleteURL(imageData.imageDeleteURL);
        toast.success("✅ Image uploaded successfully!");

        return imageData; // Return the image URLs
      } else {
        toast.error("❌ Failed to upload image.");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      toast.error("❌ Image upload error.");
    } finally {
      setImageOptimizing(false);
    }

    return null; // In case of failure, return null
  };

  const handleUpdateTask = async () => {
    if (!task?.question || !task?.answer) {
      toast.error("Please fill all required fields");
      return;
    }

    let imageUrl = task.image; // Keep existing image if no new one is uploaded

    if (imageFile) {
      // Step 1: Delete old image from Cloudinary if it exists
      if (task.image) {
        try {
          const publicId = task.image.split("/").pop().split(".")[0]; // Extract public_id
          await axios.delete(
            `http://localhost:5000/api/v1/delete-image/${publicId}`
          );
        } catch (error) {
          console.error("Failed to delete old image:", error);
          toast.error("❌ Failed to remove old image.");
        }
      }

      // Step 2: Upload new image
      const imageData = await handleImageUpload(imageFile);
      if (imageData) {
        imageUrl = imageData.imageURL;
      }
    }

    // Step 3: Update the task with new image URL
    const updatedTask = { ...task, image: imageUrl };

    try {
      await axios.patch(
        `http://localhost:5000/api/v1/writing-task/update/${taskId}`,
        updatedTask
      );
      toast.success("✅ Writing task updated successfully!");
      router.push("/writing-tasks");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("❌ Failed to update writing task.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit Writing Task</h2>

      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter question*"
        value={task.question || ""}
        onChange={(e) => setTask({ ...task, question: e.target.value })}
      />

      <SunEditor
        ref={editorRef}
        setContents={task.answer || ""}
        onChange={(content) => setTask({ ...task, answer: content })}
      />

      {/* Image Upload Section */}
      <div className="mt-6">
        <label className="block text-gray-800 font-semibold mb-3">
          Update Image (optional)
        </label>
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        {/* Show New Image Preview If Selected */}
        {imageFile ? (
          <div className="flex flex-col items-center">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="New Upload"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
            <button
              onClick={() => setImageFile(null)}
              className="mt-2 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ) : (
          // Show Existing Image If Available
          task.image && (
            <div className="mt-4">
              <p className="font-semibold">Current Image:</p>
              <img
                src={task.image}
                alt="Current Task"
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          )
        )}
      </div>

      <button
        onClick={handleUpdateTask}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      >
        {uploadingImage ? "Uploading..." : "Update"}
      </button>
    </div>
  );
};

export default EditWritingTask;
