import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import EditSuccessStory from "./EditSuccessStory";
import AddSuccessStory from "./AddSuccessStory";

const AllSuccessStories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      name: "John Doe",
      description: "Scored 8.5 in IELTS!",
      type: "academic",
      mode: "computer_based",
      totalBand: 8.5,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Achieved her dream job!",
      type: "general",
      totalBand: 7.5,
      image: "https://via.placeholder.com/300",
    },
  ]);

  const [modalType, setModalType] = useState(null); // 'add', 'edit', 'delete'
  const [selectedStory, setSelectedStory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    mode: "",
    totalBand: "",
  });

  const openModal = (type, story = null) => {
    setSelectedStory(story);
    setModalType(type);
    if (type === "edit" && story) {
      setFormData(story);
    } else if (type === "add") {
      setFormData({
        name: "",
        description: "",
        type: "",
        mode: "",
        totalBand: "",
      });
    }
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedStory(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setStories(
      stories.map((story) =>
        story.id === selectedStory.id ? { ...story, ...formData } : story
      )
    );
    closeModal();
  };

  const handleAddSuccessStory = () => {
    setStories([...stories, { id: stories.length + 1, ...formData }]);
    closeModal();
  };

  const handleDelete = () => {
    setStories(stories.filter((story) => story.id !== selectedStory.id));
    closeModal();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("modal");
      if (modal && !modal.contains(event.target)) {
        closeModal();
      }
    };
    if (modalType) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalType]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Success Stories</h2>
        <button
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={() => openModal("add")}
        >
          <FaPlus className="mr-2" /> Create Success Story
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{story.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{story.description}</p>
              <div className="text-sm mt-2">
                <span className="font-bold">Type:</span> {story.type}
              </div>
              {story.type === "academic" && (
                <div className="text-sm">
                  <span className="font-bold">Mode:</span> {story.mode}
                </div>
              )}
              <div className="text-sm">
                <span className="font-bold">Total Band:</span> {story.totalBand}
              </div>
            </div>

            <div className="flex justify-end mt-auto space-x-3 pt-3">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => openModal("edit", story)}
              >
                <FaEdit size={18} />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => openModal("delete", story)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            id="modal"
            className="bg-white rounded-lg shadow-lg p-6 min-w-[350px] max-w-[90%] max-h-[90%] overflow-scroll"
          >
            {modalType === "add" && <AddSuccessStory />}
            {modalType === "edit" && <EditSuccessStory />}
            {modalType === "delete" && (
              <>
                <h3 className="text-lg font-bold">Confirm Deletion</h3>
                <p className="text-gray-700 mt-2">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold">{selectedStory?.name}</span>?
                </p>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSuccessStories;
