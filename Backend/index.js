import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import authRoute from './routes/auth.js'
const app = express()

mongoose.connect("mongodb://localhost:27017/campusconnect").then(()=>{
    console.log("Database connectd");
}).catch((err)=>{
console.log(err);
})

const port = 3000;


app.use(express.json())
app.use(cors())

app.use("/api/auth",authRoute)
  





app.listen(port,()=>{
    console.log(`server runnig on ${port}`)
})