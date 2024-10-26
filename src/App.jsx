import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";

function App() {
  return (
    <>
      <h1>Home</h1>
      <TaskInput />
      <TaskList />
    </>
  );
}

export default App;
