import { Card } from "flowbite-react";
import imgs from "./imgg.jpg";

function PostDatacopy() {
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4 border border-teal-500 rounded-lg dark:bg-[#1F2937] ">
      {/* left (image) */}
      <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center">
        <img src={imgs} alt="" className="h-full w-full object-cover" />
      </div>
      
      {/* right (text content) */}
      <div className="flex flex-col w-full m-1 md:w-[65%]">
        <h1 className="text-xl font-bold md:text-2xl">
          this title
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm font-semibold text-gray-500 md:mb-4">
          <p>@kartikmadasanal</p>
          <div className="flex md:ml-2 space-x-2 m-1 ">
            <p>Fri Jun 28 2024</p>
            <p>16:34:58</p>
          </div>
        </div>
        
        <p className="text-sm md:text-lg">hello this is content hello this is hello this is content</p>
      </div>
    </div>
  );
}

export default PostDatacopy;
