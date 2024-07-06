import React from 'react'
import PostData from '../Components/PostData';
import Categorycards from '../Components/Categorycards';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import FooterBar from '../Components/Footer';
function Home() {


  return (
    <div>
      <Header />

      <div className='flex flex-col items-center justify-center flex-nowrap '>
        <Categorycards />
      </div>
      <div className=' flex gap-8 flex-wrap items-center justify-center mt-5'>

        <Link to={'/'}>

          <PostData />
        </Link>
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />

      </div>
      <FooterBar />
    </div>
  )
}

export default Home
