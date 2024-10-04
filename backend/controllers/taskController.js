const User=require("../models/User")

exports.getTasks=async(req,res)=>{
    try{
   const task= await User.find()
   res.json(task)
    }
    catch(err){
        res.status(500).json({err:"SERVER ERROR"})
    }
}

exports.postTasks=async(req,res)=>{
    const {name,email,phone_number}=req.body;
    try{
        const newTask=new User({name,email,phone_number})
        await newTask.save()
        res.status(201).json(newTask)

    }
    catch(err){
        res.status(500).json({err:"SERVER ERROR"})
    }
}

exports.deleteTasks=async(req,res)=>{
    try{
      const id=req.params.id;
      const deledoc=await User.findByIdAndDelete(id)
      res.status(204).json({message: "User Detail deleted"})
    }
    catch(err){
        res.status(500).json({err:"SERVER ERROR"})
    }
}


exports.updateTask = async (req, res) => {
  
    try{
      const {name,email,phone_number}=req.body;
      const id=req.params.id; 
     const updateTodoDoc= await  User.findByIdAndUpdate(
         
         /*  { _id: req.params.id, user: req.user.id }, */
          id,
          {name,email,phone_number},
          {new:true}
      )
      if(!updateTodoDoc){
          return res.status(404).json({message:"Todo not found"})
      }
        res.json(updateTodoDoc)
    
  }catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };
