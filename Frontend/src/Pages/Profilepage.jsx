import React from 'react'
import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';

import imgs from "../Components/imgg.jpg"
import Header from '../Components/Header';
import FooterBar from '../Components/Footer';
function Profilepage() {
  return (
    <div>
      <Header />

      <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
        <form className='flex flex-col gap-4'>
          <input
            type='file'
            accept='image/*'

            hidden
          />
          

          <TextInput
            type='text'
            id='username'
            placeholder='username'

          />
          <TextInput
            type='text'
            id='USN'
            placeholder='USN'

          />
          <TextInput
            type='email'
            id='email'
            placeholder='email'

          />
          <TextInput
            type='password'
            id='password'
            placeholder='password'
          />
          <Button
            type='submit'
            gradientDuoTone='purpleToBlue'
            outline
          >Update
          </Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
          <span className='cursor-pointer'>
            Delete Account
          </span>
          <span className='cursor-pointer'>
            Sign Out
          </span>
        </div>

      </div>
      <FooterBar />
    </div>
  )
}

export default Profilepage
