import TaskItem from "../taskItem/TaskItem";
import "./TaskList.css";

export default function TaskList() {
  return (
    <div className="list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}
