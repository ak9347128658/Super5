
import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'

function App() {
  const [tasks,setTasks] = useState([
  {id:1,title:"Task 1",completed:false},
  ])

  const addTask = (title) => {
    const newTask = {id:tasks.length+1,title,completed:false}
    setTasks([...tasks,newTask])
  }

  const toggleTask = (id) => {
    console.log("i am clicked")
   setTasks(tasks.map(task => task.id === id ? {...task,completed:!task.completed} : task))
  };

  return (
    <div>
      <h1>Task List</h1>
    <TaskList tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
    </div>
  )
}

export default App
