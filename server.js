const express=require('express')
const app=express();
const connectDB=require('./config/connectDB')
connectDB()
 const user=require("./routes/User")
 app.use(express.json())
app.use("/user",user)
const PORT=process.env.PORT||5000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is runnig in port ${PORT}`))
