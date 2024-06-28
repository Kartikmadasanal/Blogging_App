import React from 'react'
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon} from "react-icons/fa"
import { Link } from 'react-router-dom';
import logo from "./FeatherPen.png"
function Header() {
  return (
    <Navbar className='border-b-2'>

    <Link
      to='/'
      className='self-center flex whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
    >
      <img className=' size-7' src={logo}/>
      <span className='py-1  rounded-lg text-red'>
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
        
      ><FaMoon />
        {/* {theme === 'light' ? <FaSun /> : <FaMoon />} */}
      </Button>
      
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Home</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </div>
    <Navbar.Collapse>
      <Navbar.Link >
        <Link to='/'>Home</Link>
      </Navbar.Link>
      <Navbar.Link >
        <Link to='/aboutus'>About</Link>
      </Navbar.Link>
      <Navbar.Link >
        <Link to='/contact'>Contact</Link>
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
