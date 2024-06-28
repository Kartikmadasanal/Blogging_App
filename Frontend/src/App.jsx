import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Login from "./Pages/Login"
import Signin from "./Pages/Signin"
import Contact from "./Pages/Contact"
import Profilepage from "./Pages/Profilepage"
import Createpost from "./Pages/Createpost"
import Header from "./Components/Header"


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/> }/>
        <Route path="/Signin" element={<Signin/> }/>
        <Route path="/aboutus" element={<Aboutus/> }/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/profilepage" element={<Profilepage/> }/>
        <Route path="/createpost" element={<Createpost/> }/>
      </Routes>
    </BrowserRouter>
  )
}