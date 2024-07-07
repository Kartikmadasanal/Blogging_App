import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()
// user register
router.post("/register",async(req,res)=>{
    try{
        const {username,usn,email,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hashSync(password,salt)
        const newUser=new User({username,email,usn,password:hashedPassword})
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)

    }
    catch(err){
        res.status(500).json(err)
    }

})


export default router;