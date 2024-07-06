import { Button, Checkbox, Label, TextInput, Avatar, Dropdown, Navbar } from "flowbite-react";
import FooterBar from "../Components/Footer";
import { Link, useLocation } from 'react-router-dom';
import logo from "../Components/FeatherPen.png"
import { AiOutlineSearch } from "react-icons/ai"

function Signin() {
  return (
    <div>
      <Navbar className='border-b-2 '>

        <div
          to='/'
          className='self-center flex  whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
        >
          <img className=' size-7' src={logo} />
          <span className='py-1  rounded-lg text-red font-sans '>
            CampusConnect
          </span>
        </div>


        <div className='flex gap-2 md:order-2 '>

          <div className="flex md:order-2 float-end">

            <Navbar.Toggle />
          </div>
        </div>
        <Navbar.Collapse>
          <Navbar.Link  as={'div'}>
            <Link to='/login'>Login</Link>
          </Navbar.Link>
          <Navbar.Link  as={'div'}>
            <Link to='/signin'>Register</Link>
          </Navbar.Link>

        </Navbar.Collapse>
      </Navbar>


      <div className=' min-h-screen mt-20 mx-auto  max-w-lg'>

        <form className="flex  justify-center  p-3 w-full flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Your username" />
            </div>
            <TextInput id="username" type="test" placeholder="Your username" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Your USN" />
            </div>
            <TextInput id="usn" type="test" placeholder="Your USN" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="Your email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" placeholder="********" required />
          </div>
          <Button type="submit">Register</Button>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/login' className='text-blue-500'>
              Sign In
            </Link>
          </div>

        </form>
      </div>

      <FooterBar />
    </div>
  );
}

export default Signin

