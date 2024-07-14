import React from 'react';
import TaskInput from './TaskInput';
import Task from './Task';

function TaskList({ tasks, addTask, toggleTask }) {
    return (
        <div className="container mx-auto px-4">
            <TaskInput addTask={addTask} />
            <div className="mt-4">
                {tasks.map((task, index) => (
                    <Task key={index} task={task} toggleTask={toggleTask} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
