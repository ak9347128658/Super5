import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:3000/gettasks`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setTasks(data.tasks);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        toast.error(`Error fetching tasks: ${error.message}`);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:3000/deletetask/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== taskId));
        toast.success('Task deleted successfully!');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      toast.error(`Error deleting task: ${error.message}`);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task.id} className="mb-3 p-2 border rounded">
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <button onClick={() => navigate(`/tasks/update/${task.id}`)} className="btn btn-secondary">Edit</button>
          <button onClick={() => handleDelete(task.id)} className="btn btn-danger">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
