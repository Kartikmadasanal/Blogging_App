import React from "react"
import {  Routes, Route, BrowserRouter } from "react-router-dom"
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
import { UserContextProvider } from "./contaxt/UserContext"
// import ProtectedRoute from './utils/ProtectiveRoutes'
import EmailVerify from "./Pages/EmailVerity"



export default function App() {
  return (
    <BrowserRouter>
      
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Login" element={<Login/> }/>
        <Route path="/Signin" element={<Signin/> }/>
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/createpost" element={<Createpost/>}/>
        <Route path="/profile/:id" element={<Profilepage/>}/>
        <Route path="/posts/post/:id" element={<Postpage/>}/>
        <Route path="/edit/:id" element={<Editpost/>}/>
        <Route path="/myblogs/:id" element={<Myblogs/>}/>
      </Routes>
      
    </UserContextProvider>
    </BrowserRouter>

  )     

}