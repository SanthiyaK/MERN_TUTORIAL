
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskUpdate from './components/TaskUpdate';



function App() {

    const [tasks,setTasks]=useState([])
      useEffect(()=>{
      const fetchData=async()=>{
          const res=await axios.get('http://localhost:5000/api/tasks')
          setTasks(res.data)
      }
    fetchData()
      },[])

      const updateTask = (updateTodoDoc) => {
        setTasks(tasks.map(task => task._id === updateTodoDoc._id ? updateTodoDoc : task));
      };

    const arryvalue= tasks.map((list,i)=>{
      return <div key={i}>{list.name}&nbsp;&nbsp; {list.email}&nbsp;&nbsp;{list.phone_number}
     
       <button onClick={()=>handleDelete(list._id)} >Delete</button>
       <TaskUpdate key={i} list={list} onUpdate={updateTask}  /></div>
     })
   
    const Add=(response)=>{
      setTasks([...tasks,response])
    }
    const handleDelete=async(id)=>{
      await axios.delete(`http://localhost:5000/api/tasks/${id}`)
      setTasks(tasks.filter(user=>user._id!==id));
    }
   
  
   
  return (
    <div className="App">
      <header className="App-header">
       <h1> DELETE Operation in MERN </h1>
      {arryvalue}
     
     <TaskForm handleAdd={Add}/>
   
      </header>
    </div>
  );
}

export default App;
