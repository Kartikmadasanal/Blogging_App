import { Button, Textarea } from 'flowbite-react';
import imgs from "../Components/imgg.jpg"

function Comment() {

    return (
        <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
            <div className='flex-shrink-0 mr-3'>
                <img
                    className='w-10 h-10 rounded-full bg-gray-200'
                    src={imgs}
                    alt="poprpic"
                />
            </div>
            <div className='flex-1'>
                <div className='flex items-center mb-1'>
                    <span className='font-bold mr-1 text-xs truncate'>
                        @kartikmadasanal
                    </span>
                   
                </div>

                <>
                    <Textarea
                        className='mb-2'
                        value='hello'
                    />
                    <div className='flex justify-end gap-2 text-xs'>
                        <Button
                            type='button'
                            size='sm'
                            gradientDuoTone='purpleToBlue'

                        >
                            Save
                        </Button>
                    </div>
                </>
                <>
                <div className='flex items-center mb-1'>
                    <span className='font-bold mr-1 text-xs truncate'>
                        @kartikmadasanal
                    </span>
                    <div className="flex space-x-2 text-sm">
                        <p>Fri Jun 28 2024</p>
                        <p>16:34:58</p>
                    </div>
                </div>
                    <p className='text-gray-500 pb-2'>this is my comment</p>
                    <div className='flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2'>


                        <>
                            <button
                                type='button'
                                className='text-gray-400 hover:text-blue-500'
                            >
                                Edit
                            </button>
                            <button
                                type='button'

                                className='text-gray-400 hover:text-red-500'
                            >
                                Delete
                            </button>
                        </>

                    </div>
                </>

            </div>
        </div>
    );
}

export default Comment;