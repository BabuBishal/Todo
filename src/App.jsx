import React, {useState} from 'react'
import './index.css'

const App = () => {

const [tasks, setTasks] = useState([])
const [newTask, setNewTask] = useState('')
  
  function handleInputChange(event){
      setNewTask(event.target.value)
  }

  function addTask(){
    if(newTask.trim() !== ''){
      setTasks(t => [...t, newTask]);
      console.log(tasks)
      setNewTask('');
    }
  }

  function deleteTask(index){
    const UpdatedTasks = tasks.filter(( _, i) => i!==index);
    setTasks(UpdatedTasks);
}
  function moveTaskUp(index){
    if(index > 0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
        setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index< tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
        setTasks(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do List</h1>
      <div>
        <input 
        type='text' 
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleInputChange}
        />
        <button 
        className='add-btn' 
        onClick={addTask}
        >
          Add
        </button>
      </div>
      <h2>Tasks</h2>
      <ol>
        {tasks.map((task, index) => 
          <li key={index}>
            <span className='text'>{task}</span>
            <button 
              className="delete-btn"
              onClick={()=>deleteTask(index)}
            >
              Delete
            </button>
            <button 
              className="move-btn"
              onClick={()=>moveTaskUp(index)}
            >
              ☝️
            </button>
            <button 
              className="move-btn"
              onClick={()=>moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        )}
        
      </ol>
       
    </div>
  )
}

export default App