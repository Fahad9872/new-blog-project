import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "axios";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const IMAGE_BB_API_KEY = "23a138a6c5d51c6d71a87f91af3d9fe1"; // Replace with your ImageBB API key

const AddWritingTask = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState(null);
  const [imageDeleteURL, setImageDeleteURL] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [questionType, setQuestionType] = useState("task-1");
  const [category, setCategory] = useState("line_chart");

  const Task1QuestionType = [
    { value: "line_chart", label: "Line Chart" },
    { value: "bar_chart", label: "Bar Chart" },
    { value: "pie_chart", label: "Pie Chart" },
    { value: "multiple_chart", label: "Multiple Chart" },
    { value: "table", label: "Table" },
    { value: "map", label: "Map" },
    { value: "diagram", label: "Diagram" },
  ];

  const Task2QuestionType = [
    { value: "opinion", label: "Opinion" },
    { value: "discussion", label: "Discussion" },
    { value: "advantage_disadvantage", label: "Advantage & Disadvantage" },
    { value: "problem_solution", label: "Problem & Solution" },
    { value: "double_question", label: "Double Question" },
  ];

  // Dynamically get the category options based on selected questionType
  const categoryOptions =
    questionType === "task-1" ? Task1QuestionType : Task2QuestionType;
  const [error, setError] = useState("");

  const editorRef = useRef(null);

  const defaultFonts = [
    "Arial",
    "Comic Sans MS",
    "Courier New",
    "Impact",
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Verdana",
  ];

  const [imageOptimizing, setImageOptimizing] = useState(false);

  const sortedFontOptions = [
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    ...defaultFonts,
  ].sort();

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

  // const handleImageUpload = async (file) => {
  //   setImageOptimizing(true);
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try {
  //     const res = await axios.post(
  //       `https://api.imgbb.com/1/upload?key=${IMAGE_BB_API_KEY}`,
  //       formData
  //     );

  //     if (res.data.success) {
  //       const imageData = {
  //         imageURL: res.data.data.url, // The uploaded image URL
  //         imageDeleteURL: res.data.data.delete_url, // The delete URL
  //       };
  //       setImageURL(imageData.imageURL);
  //       setImageDeleteURL(imageData.imageDeleteURL);
  //       toast.success("✅ Image uploaded successfully!");

  //       return imageData; // Return the image URLs
  //     } else {
  //       toast.error("❌ Failed to upload image.");
  //     }
  //   } catch (error) {
  //     toast.error("❌ Image upload error.");
  //   } finally {
  //     setImageOptimizing(false);
  //   }

  //   return null; // In case of failure, return null
  // };

  // const imageUploadHandle = async (files, info, core) => {
  //   const file = files[0];

  //   if (!file) return;

  //   try {
  //     const formData = new FormData();
  //     formData.append("image", file);

  //     const res = await axios.post(
  //       `https://api.imgbb.com/1/upload?key=${IMAGE_BB_API_KEY}`,
  //       formData
  //     );

  //     if (res.data.success) {
  //       const uploadedImageUrl = res.data.data.url;

  //       let response = {
  //         result: [
  //           {
  //             url: uploadedImageUrl,
  //             name: file.name,
  //             size: file.size,
  //           },
  //         ],
  //       };

  //       return core.plugins.image.register.call(core, info, response);
  //     } else {
  //       toast.error("Failed to upload image.");
  //     }
  //   } catch (error) {
  //     toast.error("Image upload error.");
  //   }
  // };

  const handleAddTask = async () => {
    if (!question || !answer) {
      setError("Please fill all required fields");
      toast.error("Please fill all required fields");
      return;
    }
    setError("");

    if (selectImageFile) {
      const imageData = await handleImageUpload(selectImageFile);

      if (imageData) {
        const { imageURL, imageDeleteURL } = imageData;
        const body = {
          question,
          answer,
          image: imageURL, // Use the uploaded image URL here
          category,
          questionType,
          imageDeleteUrl: imageDeleteURL, // Send delete URL
        };

        const saving = toast.loading("Saving...");
        try {
          const { data } = await axios.post(
            `http://localhost:5000/api/v1/writing-task/create-writing-task`,
            body
          );

          console.log("Submitting Data:", data);
          toast.success("Writing task added successfully");
        } catch (err) {
          toast.error("Failed to add writing task");
        } finally {
          toast.dismiss(saving);
        }
      }
    } else {
      // If no image is selected, send without the image URL
      const body = {
        question,
        answer,
        image: imageURL, // Use existing image URL if available
        category,
        questionType,
        imageDeleteUrl: imageDeleteURL,
      };

      try {
        const saving = toast.loading("Saving...");
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/writing-task/create-writing-task`,
          body
        );
        console.log("Submitting Data:", data);
        toast.success("Writing task added successfully");
      } catch (err) {
        toast.error("Failed to add writing task");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Writing Task</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter question*"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <SunEditor
        ref={editorRef}
        onChange={(content) => setAnswer(content)}
        placeholder="Enter answer*"
        onImageUploadBefore={(files, info, core, uploadHandler) => {
          imageUploadHandle(files, info, core, uploadHandler);
        }}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            ["paragraphStyle", "blockquote", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],

            ["table", "horizontalRule", "link", "image", "video"],
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
            ["removeFormat"],
          ],
          formats: ["p", "blockquote", "h1", "h2", "h3"],
          linkTargetNewWindow: true,
          linkProtocol: "",
          linkRel: ["noreferrer"],
          linkNoPrefix: true,
          defaultTag: "div",
          minHeight: "400px",
          imageWidth: "100%",
          imageHeight: 600,
          showPathLabel: false,
          font: sortedFontOptions,
        }}
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

      <label className="font-semibold">Select Task Type</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={questionType}
        onChange={(e) => {
          setQuestionType(e.target.value);
          setCategory(
            e.target.value === "task-1"
              ? Task1QuestionType[0].value
              : Task2QuestionType[0].value
          ); // Reset category when changing task type
        }}
      >
        <option value="task-1">Task-1</option>
        <option value="task-2">Task-2</option>
      </select>

      {/* Select Category based on Task Type */}
      <label className="font-semibold">Select Category</label>
      <select
        className="w-full p-2 border rounded my-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AddWritingTask;
