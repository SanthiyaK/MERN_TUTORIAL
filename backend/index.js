const express=require('express');
const mongoose=require('mongoose');
const User=require("./models/User")
const routerUser=require("./routes/User.js")
const cors=require('cors')
require('dotenv').config();

const PORT=process.env.PORT;
const app=express();

app.use(express.json())
app.use(cors())
app.use('/api/tasks',routerUser)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database Connected")
).catch(err=>console.log("ERROR IN  DATABASE CONNECTION"))


app.listen(PORT,()=>{
    console.log(`Server is connected to the port ${PORT}`); 
})