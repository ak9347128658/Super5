import React,{useState, createContext} from 'react';

// create the context
export const TaskContext = createContext();

// provider Component
export const TaskProvider = ({ children }) => {
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
       <TaskContext.Provider value={{tasks,setTasks,addTask,toggleTask}} >
        {children}
       </TaskContext.Provider> 
    );    
}
