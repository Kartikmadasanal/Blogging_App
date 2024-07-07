import { Card } from "flowbite-react";
import imgs from "./imgg.jpg";

function PostDatacopy() {
    return (

        <Card className="max-w-sm w-[90vh]" imgSrc={imgs} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               this is my title 
            </h5>
            <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                <p>@kartikmadasanal</p>
                <div className="flex space-x-2 text-sm">
                    <p>Fri Jun 28 2024</p>
                    <p>16:34:58</p>
                </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
        </Card>
     


    );
}

export default PostDatacopy;
