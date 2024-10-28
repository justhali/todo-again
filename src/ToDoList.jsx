import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Boom boom", "Bim Bam", "Bam bam"]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <div className="todo-list">
          <ol>
            <AnimatePresence>
              {tasks.map((task, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <button onClick={confirmUpdate}>Confirm</button>
                    </>
                  ) : (
                    <>
                      <span className="text">{task}</span>
                      <div className="buttons">
                        <button
                          className="update-button"
                          onClick={() => updateTask(index)}
                        >
                          <FiEdit />
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => deleteTask(index)}
                        >
                          <MdDeleteForever />
                        </button>
                      </div>
                    </>
                  )}
                </motion.li>
              ))}
            </AnimatePresence>
          </ol>
        </div>
      </div>
    </>
  );
}
