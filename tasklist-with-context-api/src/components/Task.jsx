import React,{useContext} from 'react';
import { TaskContext } from '../mycontext/TaskContext';

function Task({task}) {
  const {toggleTask} = useContext(TaskContext);
    
    return (
        <div className="flex items-center justify-between p-2 hover:bg-gray-100" >
            <span className={`${task.completed ?'line-throught' :'text-black' } flex-1 `} >
                {task.title}
            </span>
            <button onClick={() => toggleTask(task.id)}
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                {task.completed ? 'Completed' : 'Complete'}
            </button>
        </div>
    );
}

export default Task;