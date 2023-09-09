import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Add a new task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='btn btn-primary' type='button' onClick={addTask}>
          Add
        </button>
      </div>

      <ul className='list-group'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item ${
              task.completed ? 'list-group-item-success' : ''
            }`}
          >
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span className='ml-2'>{task.text}</span>
            <button
              className='btn btn-danger btn-sm float-right'
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
