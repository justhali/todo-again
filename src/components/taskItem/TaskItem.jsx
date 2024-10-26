import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./TaskItem.css";

export default function TaskItem() {
  return (
    <>
      <div className="container">
        <div className="left-part">
          <div className="date">Priority</div>
          <p className="description">Description</p>
        </div>
        <div className="right-part">
          <button className="edit">
            <FaRegEdit />
          </button>
          <button className="delete">
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
