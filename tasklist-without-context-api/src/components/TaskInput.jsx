import React, { useState } from 'react';

function TaskInput({addTask}) {
     const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
            <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder='New Task'
             className="flex-1 p-2 border rounded border-gray-400"
            />
            <button type="submit" className='ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
                Add Task
                </button>
        </form>
    );
}

export default TaskInput;