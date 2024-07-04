import React from 'react'
import { Link } from 'react-router-dom';
import { categories, capitalizeFirstLetter } from "../Categorie/Category"
import PostData from '../Components/PostData';
function Home() {

  const category = "All"

  return (
    <div className='flex flex-col items-center justify-center flex-nowrap '>
      <div className=" mt-5 w-[80%] md:w-[50rem] xl:w-[80rem]" id="blogs">
        {/* <h1 className="text-3xl sm:text-4xl">Categories</h1> */}
        <ul className="flex gap-3 flex-wrap leading-loose">
          {categories.map((items, index) => {
            return (
              <li key={index}>
                <Link
                  to={`/?category=${items}`}
                  className={`px-4 py-[6px] shadow-md rounded-full cursor-pointer ${category === items
                      ? "bg-white text-black"
                      : "text-white bg-zinc-800"
                    }`}
                >                  {capitalizeFirstLetter(items)}

                </Link>
              </li>
            );
          })}
        </ul>
      </div>
     <div className=' flex gap-8 flex-wrap items-center justify-center mt-5'>

   
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
        <PostData />
       
        </div>
    </div>
  )
}

export default Home
