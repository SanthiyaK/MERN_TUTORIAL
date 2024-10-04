const mongoose=require('mongoose');
const User=require("./models/User")
const userjson=require("./data/db.json")
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
.then(async()=>{
    console.log("Database Connected");
    await User.deleteMany()
     await  User.insertMany(userjson);

  console.log("Data is inserted");
  mongoose.disconnect();
}).catch(err=> console.log(err))