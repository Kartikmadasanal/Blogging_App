import React from 'react'
import PostData from '../Components/PostData';
import Categorycards from '../Components/Categorycards';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import FooterBar from '../Components/Footer';
import PostDatacopy from '../Components/PostDatacopy';
function Home() {


  return (
    <div>
      <Header />

      <div className='flex flex-col items-center justify-center flex-nowrap '>
        <Categorycards />
      </div>
      <div className="px-4 py-5 md:px-[200px] min-h-[80vh]">

        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
        <PostDatacopy/>
      </div>

      <FooterBar />
    </div>
  )
}

export default Home
