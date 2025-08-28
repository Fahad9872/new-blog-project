import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const IMAGE_BB_API_KEY = "23a138a6c5d51c6d71a87f91af3d9fe1"; // Replace with your ImageBB API key

const AddSuccessStory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [category, setCategory] = useState("line_chart");
  const [type, setType] = useState("general");
  const [mode, setMode] = useState("");
  const [totalBand, setTotalBand] = useState("");
  const [listeningBand, setListeningBand] = useState("");
  const [readingBand, setReadingBand] = useState("");
  const [speakingBand, setSpeakingBand] = useState("");
  const [writingBand, setWritingBand] = useState("");
  const [error, setError] = useState("");

  const categoryOptions = [
    { value: "line_chart", label: "Line Chart" },
    { value: "bar_chart", label: "Bar Chart" },
    { value: "pie_chart", label: "Pie Chart" },
    { value: "multiple_chart", label: "Multiple Chart" },
    { value: "table", label: "Table" },
    { value: "map", label: "Map" },
    { value: "diagram", label: "Diagram" },
  ];

  const [selectImageFile, setSelectImageFile] = useState();

  const onSelectFile = async (e) => {
    setSelectImageFile(e.target.files[0]);
  };

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

  const imageUploadHandle = async (files, info, core) => {
    const file = files[0];

    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("image", file);

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
        const uploadedImageUrl = res.data.data.imageUrl;

        let response = {
          result: [
            {
              url: uploadedImageUrl,
              name: file.name,
              size: file.size,
            },
          ],
        };

        return core.plugins.image.register.call(core, info, response);
      } else {
        toast.error("❌ Failed to upload image.");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      toast.error("❌ Image upload error.");
    }
  };
  const bandOptions = [
    { value: 1, label: "1 😞" },
    { value: 1.5, label: "1.5 😟" },
    { value: 2, label: "2 😔" },
    { value: 2.5, label: "2.5 😕" },
    { value: 3, label: "3 😐" },
    { value: 3.5, label: "3.5 🙂" },
    { value: 4, label: "4 😊" },
    { value: 4.5, label: "4.5 😄" },
    { value: 5, label: "5 😀" },
    { value: 5.5, label: "5.5 😁" },
    { value: 6, label: "6 😎" },
    { value: 6.5, label: "6.5 🤩" },
    { value: 7, label: "7 🏆" },
    { value: 7.5, label: "7.5 💪" },
    { value: 8, label: "8 🌟" },
    { value: 8.5, label: "8.5 👑" },
    { value: 9, label: "9 🏅" },
  ];

  // Validate band score (1, 1.5, 2, 2.5, ..., 9)
  const validateBandScore = (score) => {
    const validScores = [
      1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
    ];
    return validScores.includes(parseFloat(score));
  };

  const calculateOverallBand = () => {
    const bands = [listeningBand, readingBand, speakingBand, writingBand];

    const validBands = bands.filter((band) => {
      return band && validateBandScore(band);
    });

    if (validBands.length === bands.length) {
      const sum = validBands.reduce((acc, band) => acc + parseFloat(band), 0);
      return (Math.round((sum / validBands.length) * 2) / 2).toFixed(1); // Round to the nearest 0.5
    }

    return "";
  };

  const handleAddSuccessStory = async () => {
    // Validation for required fields based on the schema
    if (!name || !description) {
      setError("Please fill all required fields");
      toast.error("Please fill all required fields");
      return;
    }

    if (
      type === "academic" &&
      (!mode || !listeningBand || !readingBand || !speakingBand || !writingBand)
    ) {
      setError("Please fill all required academic fields");
      toast.error("Please fill all required academic fields");
      return;
    }

    if (
      type === "general" &&
      (!listeningBand || !readingBand || !speakingBand || !writingBand)
    ) {
      setError("Please fill all required general fields");
      toast.error("Please fill all required general fields");
      return;
    }

    // Validate Band Scores for General and Academic Type
    if (
      ![listeningBand, readingBand, speakingBand, writingBand].every(
        validateBandScore
      )
    ) {
      setError("Please enter valid band scores (1, 1.5, 2, ..., 9).");
      toast.error("Please enter valid band scores (1, 1.5, 2, ..., 9).");
      return;
    }

    setError("");

    const overallBand = calculateOverallBand();
    if (overallBand) {
      setTotalBand(overallBand); // Set total band after calculating overall score
    }

    if (selectImageFile) {
      await handleImageUpload(selectImageFile);
    }

    const body = {
      name,
      description,
      type,
      mode,
      totalBand: totalBand ? Number(totalBand) : undefined,
      listeningBand: listeningBand ? Number(listeningBand) : undefined,
      readingBand: readingBand ? Number(readingBand) : undefined,
      speakingBand: speakingBand ? Number(speakingBand) : undefined,
      writingBand: writingBand ? Number(writingBand) : undefined,
      image: imageURL,
      video: videoLink,
    };

    const saving = toast.loading("Saving...");

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/success-story/create-success-story`,
        body
      );

      console.log("Submitting Data:", data);
      toast.success("Success story added successfully");
    } catch (err) {
      toast.error("Failed to add success story");
    } finally {
      toast.dismiss(saving);
    }
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Add Success Story</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter name*"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter description*"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="6"
      />

      <input
        type="url"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter Video Link (optional)"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />

      <div className="mt-6">
        <label className="block text-gray-800 font-semibold mb-3 text-lg">
          Upload Image (optional)
        </label>

        <div className="relative border-2 border-dashed border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition duration-300 ease-in-out">
          <input
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <svg
            className="w-14 h-14 text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          <p className="text-gray-600 text-sm text-center max-w-xs">
            Click to upload your image here
          </p>
        </div>

        {selectImageFile && (
          <div className="mt-6 flex flex-col items-center">
            <img
              src={URL.createObjectURL(selectImageFile)}
              alt="Uploaded"
              className="mt-4 w-[300px] h-[300px] object-cover rounded-xl shadow-xl"
            />
            <button
              onClick={() => setSelectImageFile(null)}
              className="mt-3 text-red-500 hover:text-red-700 text-sm font-semibold transition duration-200"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {/* Type Selection */}
      <label className="font-semibold">Select Type</label>
      <select
        className="w-full p-2 border rounded my-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="general">General</option>
        <option value="academic">Academic</option>
      </select>

      <label className="font-semibold">Mode</label>
      <select
        className="w-full p-2 border rounded my-4"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="">Select Mode</option>
        <option value="computer_based">Computer Based</option>
        <option value="paper_based">Paper Based</option>
      </select>

      {/* Mode and Band Fields (only if type is academic or general) */}
      {["academic", "general"].includes(type) && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Listening Band"
              value={listeningBand}
              onChange={(e) => setListeningBand(e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Reading Band"
              value={readingBand}
              onChange={(e) => setReadingBand(e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Speaking Band"
              value={speakingBand}
              onChange={(e) => setSpeakingBand(e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Writing Band"
              value={writingBand}
              onChange={(e) => setWritingBand(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold">Overall Band</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={totalBand || calculateOverallBand()} // Display overall band
              disabled
            />
          </div>
        </>
      )}

      <button
        className="w-full py-3 bg-indigo-600 text-white rounded-lg mt-6"
        onClick={handleAddSuccessStory}
      >
        Add Success Story
      </button>
    </div>
  );
};

export default AddSuccessStory;
