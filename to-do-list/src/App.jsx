import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'

function App() {
  const inputRef = useRef(null)
  const [task, setTask] = useState("");
  const [mytodos, setMytodos] = useState([])
  const [toBeEdit, setToBeEdit] = useState()
  const [update , setUpdate] = useState(false)


  useEffect(() => {
    if (update) {
        // inputRef.current.select();
        inputRef.current.focus();
    }
}, [update]);

  const handleAddTask = (e)=>{
    e.preventDefault()
    setMytodos([...mytodos,{id:uuidv4(), task,isCompleted:false}])
    setTask("")
  }
  const handleRemoveTodo = (id)=>{
 const todos = mytodos.filter(todo=>todo.id != id)
 setMytodos(todos) 
  }
  const handleUpdateTodo = (id)=>{
    setUpdate(true)
    const editTodo = mytodos.filter(todo=>todo.id == id)
    for (const iterator of editTodo) {
      setTask(iterator.task)
    }
    setToBeEdit(editTodo) 
  
    
  }

     const handleUpdate = (e)=>{
      e.preventDefault()
       const newm = toBeEdit.map(item=>({...item , task:task}))
       
   const indexx =  mytodos.findIndex(todo=>todo.id == newm[0].id)
         const ttt =  mytodos.map((item,index)=>  {
        if(index==indexx){
         return ({...item , task:task})
        }
        } )
        setMytodos(ttt)
        setUpdate(false)
        setTask("")
     
        
     }
     const handleCompleted= (id)=>{
      const updatedTodos = mytodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    
      setMytodos(updatedTodos);
      
    
    
     }

   const handleClearTasks = ()=>{
    setMytodos([])
   }
   const handleCancelUpdate = ()=>{
    setTask("")
    setUpdate(false)
   }

  return (
 
    <div className="todo-app">
      <h3>"Do not focus on the designe just focus on the functionality"</h3>
      <h2>Made By Farzeel Aftab</h2>
    <h1>To-Do List</h1>
    <form onSubmit={update?handleUpdate:handleAddTask}>
      <input
      ref={inputRef}
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
      />
      {update?<><button onClick={handleCancelUpdate} >cancel</button><button onClick={handleUpdate}>Update task</button></>:<button type="submit">"Add Task"</button>}
    </form>
    <ul>
      {mytodos.map((todo) => (
        <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={()=>handleCompleted(todo.id)}
          />
          <span>{todo.task}</span>
          <button className='remove' onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
          <button className='edit' disabled={todo.isCompleted} onClick={()=> handleUpdateTodo(todo.id)}>Edit</button>
        </li>
      ))}
    </ul>
    <div>
      <p>Total Tasks: {mytodos.length} </p>
      <p>Completed Tasks: {mytodos.filter(todo=>todo.isCompleted==true).length}</p>
      <button onClick={handleClearTasks}>Clear Completed Tasks</button>
    </div>
  </div>
);
}

export default App
