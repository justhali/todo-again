/* eslint-disable react/prop-types */
// TaskItem.js
import { motion } from "framer-motion";
import { FiMoreVertical } from "react-icons/fi";

export default function TaskItem({
  task,
  index,
  showOptionsIndex,
  toggleOptions,
  updateTask,
  deleteTask,
  editIndex,
  editText,
  setEditText,
  confirmUpdate,
}) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        position: "relative",
      }}
      role="listitem"
      tabIndex={0}
    >
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            aria-label="Edit task"
          />
          <button onClick={confirmUpdate} aria-label="Confirm edit">
            Confirm
          </button>
        </>
      ) : (
        <>
          <span className="text">{task}</span>
          <div
            className="menu-icon"
            onClick={() => toggleOptions(index)}
            aria-label="Options"
            tabIndex={0}
          >
            <FiMoreVertical />
          </div>
          {showOptionsIndex === index && (
            <div className="options-menu">
              <button
                onClick={() => updateTask(index)}
                aria-label="Update task"
              >
                Update
              </button>
              <button
                onClick={() => deleteTask(index)}
                aria-label="Delete task"
              >
                Delete
              </button>
            </div>
          )}
        </>
      )}
    </motion.li>
  );
}
