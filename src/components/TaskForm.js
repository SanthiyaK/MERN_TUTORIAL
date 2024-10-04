
import axios from 'axios';
import React, {  useState } from 'react';


export default function TaskForm({handleAdd}) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone_number, setPhoneNumber] = useState('');
   
    const handleSubmit=async(e)=>{
      e.preventDefault();

         const res= await axios.post("http://localhost:5000/api/tasks",{name,email,phone_number})    
         handleAdd(res.data)
         setName('')
         setEmail('')
         setPhoneNumber('')
        }

    
  return (
    <>
    <div class="mt-5">
    <form onSubmit={handleSubmit}>
      <input type="text" value={name}  class="form-control mb-2" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email}  class="form-control mb-2"  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="number" value={phone_number} class="form-control mb-2"  onChange={(e) => setPhoneNumber(e.target.value)}  placeholder="Phone Number" />
      
      <button type="submit" class="btn btn-success mb-4">Add Task</button>
    </form>
    </div>
    </>
  )
}
