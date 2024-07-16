
import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import ChildrenTest from './components/ChildrenTest'
import { TaskProvider } from './mycontext/TaskContext'

function App() {

  return (
    <TaskProvider>
    <div>
      <h1>Task List</h1>
    <TaskList />
    </div>
    </TaskProvider>
    
  )
}

export default App


    {/* <ChildrenTest title="i am hellow title" >
      <h1>Hellow How are you?</h1>
    </ChildrenTest> */}