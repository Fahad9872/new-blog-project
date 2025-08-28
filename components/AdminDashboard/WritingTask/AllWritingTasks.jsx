import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import EditWritingTask from "./EditWritingTask";
import AddWritingTask from "./AddWritingTask";
import axios from "axios";

const AllWritingTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/v1/writing-task/`
        );
        setTasks(result.data.data);
      } catch (error) {}
    };
    run();
  }, []);

  const [modalType, setModalType] = useState(null); // 'add', 'edit', 'delete'
  const [selectedTask, setSelectedTask] = useState(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    questionType: "",
    category: "",
    image: "",
    video: "",
  });

  const openModal = (type, task = null) => {
    setSelectedTask(task);
    setModalType(type);
    if (type === "edit" && task) {
      setFormData(task);
    } else if (type === "add") {
      setFormData({
        question: "",
        answer: "",
        questionType: "",
        category: "",
        image: "",
        video: "",
      });
    }
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedTask(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setTasks(
      tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, ...formData } : task
      )
    );
    closeModal();
  };

  const handleAddWritingTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, ...formData }]);
    closeModal();
  };

  const handleDelete = () => {
    setTasks(tasks.filter((task) => task.id !== selectedTask.id));
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

  const [taskId, setTaskId] = useState(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Writing Tasks</h2>
        <button
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={() => openModal("add")}
        >
          <FaPlus className="mr-2" /> Create Writing Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            <div className="mt-3">
              <img src={task.image} alt="" srcset="" />
              <h3 className="text-lg font-semibold">{task.question}</h3>
              <p className="text-gray-600 text-sm mt-1">{task.answer}</p>
              <div className="text-sm mt-2">
                <span className="font-bold">Type:</span> {task.questionType}
              </div>
              <div className="text-sm">
                <span className="font-bold">Category:</span> {task.category}
              </div>
            </div>

            <div className="flex justify-end mt-auto space-x-3 pt-3">
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => {
                  openModal("edit", task);
                  setTaskId(task._id);
                }}
              >
                <FaEdit size={18} />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => openModal("delete", task)}
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
            {modalType === "add" && <AddWritingTask />}
            {modalType === "edit" && <EditWritingTask taskId={taskId} />}
            {modalType === "delete" && (
              <>
                <h3 className="text-lg font-bold">Confirm Deletion</h3>
                <p className="text-gray-700 mt-2">
                  Are you sure you want to delete
                  <span className="font-semibold">
                    {" "}
                    {selectedTask?.question}
                  </span>
                  ?
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

export default AllWritingTasks;
