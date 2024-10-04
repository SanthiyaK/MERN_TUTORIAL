
import axios from 'axios';
import React, {  useState } from 'react';


export default function TaskUpdate({list,onUpdate}) {
    const [isEditing, setIsEditing] = useState(false);
   const [name, setEditName] = useState(list.editname);
   const [email, setEditEmail] = useState(list.editemail);
   const [phone_number, setEditPhone] = useState(list.editphone);
   
   
   
   const handleUpdate = async () => {
    try {
   console.log(list._id);
        const response = await axios.put(`http://localhost:5000/api/tasks/${list._id}`, { name,email,phone_number});
        onUpdate(response.data);
         console.log(response.data);
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating task', error);
      }
    };
    
  return (
    <>
    <div class="mt-5">
    {isEditing ? (
    <form >
      <input type="text" value={name}   onChange={(e) => setEditName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email}   onChange={(e) => setEditEmail(e.target.value)} placeholder="Email" required />
      <input type="number" value={phone_number}  onChange={(e) => setEditPhone(e.target.value)}  placeholder="Phone Number" />
      
      <button  onClick={handleUpdate} >Save</button>
      <button  onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
        ) : (
            <div class="mb-2 p-3">
          
            <h3>{list.editname}</h3>
            <p>{list.editemail}</p>
            <p>{list.editphone}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
      )}
    </div>
    </>
  )
}
