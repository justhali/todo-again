import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ConfirmDialog from "./ConfirmDialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskItem from "./TaskItem";

export default function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return JSON.parse(savedTasks) || [];
  });
  const [showOptionsIndex, setShowOptionsIndex] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
      setShowOptionsIndex(null);
      toast.success("💪 You can do this", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  function toggleOptions(index) {
    setShowOptionsIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  function deleteTask(index) {
    setDeleteIndex(index);
  }

  function confirmDelete() {
    const updatedTasks = tasks.filter((_, i) => i !== deleteIndex);
    setTasks(updatedTasks);
    setDeleteIndex(null);
    toast.error("😲 For real ?! It's deleted", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function updateTask(index) {
    setEditIndex(index);
    setEditText(tasks[index]);
  }

  function confirmUpdate() {
    if (editText.trim() !== "") {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks[editIndex] = editText;
        return updatedTasks;
      });
      setEditIndex(null);
      setEditText("");
    }
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>To Do List</h1>
          <span>...another one</span>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Enter new task"
            onChange={handleInputChange}
            value={newTask}
            aria-label="New task input"
          />
          <button
            className="add-button"
            onClick={addTask}
            aria-label="Add task"
          >
            Add
          </button>
        </div>
        <div className="todo-list">
          <ol>
            <AnimatePresence>
              {tasks.map((task, index) => (
                <TaskItem
                  key={index}
                  task={task}
                  index={index}
                  showOptionsIndex={showOptionsIndex}
                  toggleOptions={toggleOptions}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  editIndex={editIndex}
                  setEditIndex={setEditIndex}
                  editText={editText}
                  setEditText={setEditText}
                  confirmUpdate={confirmUpdate}
                />
              ))}
            </AnimatePresence>
          </ol>
        </div>

        {deleteIndex !== null && (
          <ConfirmDialog
            message="Are you sure you want to delete this task?"
            onConfirm={confirmDelete}
            onCancel={() => setDeleteIndex(null)}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
}
