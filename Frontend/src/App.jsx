import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Login from "./Pages/Login"
import Signin from "./Pages/Signin"
import Contact from "./Pages/Contact"
import Profilepage from "./Pages/Profilepage"
import Createpost from "./Pages/Createpost"
import Postpage from "./Pages/Postpage"
import Myblogs from "./Pages/Myblogs"
import Editpost from "./Pages/Editpost"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/> }/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/profilepage" element={<Profilepage/> }/>
        <Route path="/createpost" element={<Createpost/> }/>
        <Route path="/myblogs" element={<Myblogs/> }/>
        <Route path="/editpost" element={<Editpost/> }/>
        <Route path="/postpage" element={<Postpage/> }/>
        <Route path="/Signin" element={<Signin/> }/>
        <Route path="/Login" element={<Login/> }/>
      </Routes>
      
    </BrowserRouter>
  )
}