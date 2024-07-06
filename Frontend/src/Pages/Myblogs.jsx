import React from 'react'
import Header from '../Components/Header'
import FooterBar from '../Components/Footer'
import PostData from '../Components/PostData'
import { Link } from 'react-router-dom'

function Myblogs() {
    return (
        <div>
            <Header />


            <div className="px-4 py-5 md:px-[200px] min-h-[80vh]">

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
