import { Button, Checkbox, Label, TextInput, Avatar, Dropdown, Navbar } from "flowbite-react";
import FooterBar from "../Components/Footer";
import { Link, useLocation } from 'react-router-dom';
import { GiFeather } from "react-icons/gi";import { AiOutlineSearch } from "react-icons/ai"

function Login() {
  return (
    <div>
      <Navbar className='border-b-2 dark:bg-[#121212] '>

        <div
          className='self-center flex  whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
        >
<GiFeather />          <span className='py-1  rounded-lg text-red font-sans '>
            CampusConnect
          </span>
        </div>


        <div className='flex gap-2 md:order-2 '>

          <div className="flex md:order-2 float-end">

            <Navbar.Toggle />
          </div>
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={'div'}>
            <Link to='/login'>Login</Link>
          </Navbar.Link>
          <Navbar.Link as={'div'}>
            <Link to='/signin'>Register</Link>
          </Navbar.Link>

        </Navbar.Collapse>
      </Navbar>


      <div className=' min-h-screen mt-20 mx-auto  max-w-lg'>

        <form className="flex  justify-center  p-3 w-full flex-col gap-4">
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
          <Button type="submit">Login</Button>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Dont Have an account?</span>
          <Link to='/signin' className='text-blue-500'>
            Sign Up
          </Link>
        </div>
        </form>
      </div>

      <FooterBar />
    </div>
  );
}

export default Login

