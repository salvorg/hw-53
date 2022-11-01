import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./Comps/AddTaskForm";
import Task from "./Comps/Task";

function App() {
  const [task, setTask] = useState([
    {text: 'Buy milk', id: '1'},
    {text: 'Walk with dog', id: '2'},
    {text: 'Do homework', id: '3'},
  ]);

  const [currentTask, setCurrentTask] = useState({text: '', id: ''});

  const taskList: React.ReactNode = task.map((task, index) => (
    <Task text={task.text}/>
  ));

  const setNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTaskCopy = {...currentTask};
    currentTaskCopy.text = event.target.value;
    const last = parseInt(task[task.length - 1].id) + 1;
    currentTaskCopy.id = String(last);
    setCurrentTask(currentTaskCopy);
  };

  const addTasks = () => {
    const taskCopy = [...task]
    const currentTuskCopy = {...currentTask};
    taskCopy.push(currentTuskCopy);
    setTask(taskCopy);
  }

  const displayAll: React.ReactNode = (
    <AddTaskForm
      inputName='Add new task'
      btnName='Add'
      onNameChange={event => setNewTask(event)}
      onClickChange={addTasks}
    />
  );

  return (
    <div className="App">
      {displayAll}
      {taskList}
    </div>
  );
}

export default App;
