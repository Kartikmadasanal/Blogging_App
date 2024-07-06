import React from 'react'
import { Link } from 'react-router-dom';
import imgs from "../Components/imgg.jpg"
import Comment from '../Components/Comment';
import { Button, Textarea } from 'flowbite-react';
import Header from '../Components/Header';
import FooterBar from '../Components/Footer';

function Postpage() {
    return (
        <div>
            <Header/>
        
        <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
            <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
                this my title
            </h1>
            <h1 className='self-center mt-5 px-4 py-[6px] shadow-md rounded-full ' pill='true'>
                react
            </h1>
            <img
                src={imgs}
                alt="prop imgs"
                className='mt-10 p-3 max-h-[600px] w-full object-cover'
            />
            <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
            <div className="flex space-x-2 text-sm">
                    <p>Fri Jun 28 2024</p>
                    <p>16:34:58</p>
                </div>                <p>@kartikmadasanal</p>

            </div>
            <div
                className='p-3 max-w-2xl mx-auto w-full post-content'>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                </p>
                </div>
            
            <Comment/>

        </main>
        <FooterBar/>
        </div>
    );

}

export default Postpage
