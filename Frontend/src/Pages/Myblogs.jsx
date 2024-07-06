import React from 'react'
import Header from '../Components/Header'
import FooterBar from '../Components/Footer'
import PostData from '../Components/PostData'
import { Link } from 'react-router-dom'

function Myblogs() {
    return (
        <div>
            <Header />


            <div className=' flex gap-8 flex-wrap items-center justify-center mt-1 min-h-screen' >

                <Link to={'/'}>

                    <PostData />
                </Link>
                <Link to={'/'}>

                    <PostData />
                </Link>
                <Link to={'/'}>

                    <PostData />
                </Link>
                <Link to={'/'}>

                    <PostData />
                </Link>
                <Link to={'/'}>

                    <PostData />
                </Link>
                <Link to={'/'}>

                    <PostData />
                </Link>


            </div>
            <FooterBar />
        </div>
    )
}

export default Myblogs
