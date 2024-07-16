import React ,{useContext} from 'react';
import TaskInput from './TaskInput';
import Task from './Task';
import {TaskContext} from '../mycontext/TaskContext';

function TaskList() {
  const {tasks} = useContext(TaskContext);
    return (
        <div className="container mx-auto px-4">
            <TaskInput />
            <div className="mt-4">
                {tasks.map((task, index) => (
                    <Task key={index} task={task}/>
                ))}
            </div>
        </div>
    );
}

export default TaskList;
