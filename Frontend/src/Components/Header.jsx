import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai"
import { FaMoon, FaSun } from "react-icons/fa"

import { Link, useLocation } from 'react-router-dom';
import logo from "./FeatherPen.png"
import imgs from "../Components/imgg.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSclice';


function Header() {
  const path = useLocation().pathname;
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();


  return (
    <Navbar className='border-b-2 '>

      <Link
        to='/'
        className='self-center flex  whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <img className=' size-7' src={logo} />
        <span className='py-1  rounded-lg text-red font-sans '>
          CampusConnect
        </span>
      </Link>
      <form >
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='w-28 lg:w-full '
        />
      </form>

      <div className='flex gap-2 md:order-2 '>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={imgs} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Kartik madasanal</span>
              <span className="block truncate text-sm font-medium">kartikmadasanal@gmail.com</span>
            </Dropdown.Header>
            <Link to={"/profilepage"}>
              <Dropdown.Item >Profile</Dropdown.Item>
            </Link>
            <Link to={"/createpost"}>
              <Dropdown.Item>Write</Dropdown.Item>
            </Link>
            <Link to={"/myblogs"}>

            <Dropdown.Item>My blogs</Dropdown.Item>
            </Link>
            <Dropdown.Item className=' sm:hidden' onClick={() => dispatch(toggleTheme())}>Change theme to {theme === 'light' ? "dark" : "light"}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/aboutus"} as={'div'}>
          <Link to='/aboutus'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={'div'} >
          <Link to='/contact'>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

// #bg-[#1D2125] 
// #bg-[#1D2125] 
// #bg-[#1D2125] 
// #bg-[#1D2125] 
// #bg-[#1D2125] 
export default Header


