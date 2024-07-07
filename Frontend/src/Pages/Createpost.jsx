import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../Components/Header';
import FooterBar from '../Components/Footer';



  
function Createpost() {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2 MB limit
    
    if (file.size > maxSize) {
        alert('File size exceeds 5 MB limit.');
        event.target.value = null; // Clear the file input
        return;
    }
  }
    
  return (
    <div>
      <Header/>
  
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4' >
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
           
          />
          <Select
            
          >
            <option value='uncategorized'>Select a category</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React.js</option>
            <option value='nextjs'>Next.js</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={handleFileChange} 
            
          />
          <h1 className='font-semibold'>Maximum file size: 2MB</h1>
        </div>
       
          {/* <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover'
          /> */}
        
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          
        />
        <Button type='submit' className=' bg-[#BB86FC]'>
          Publish
        </Button>
        
      </form>
    </div>
    <FooterBar/>
    </div>
  );
}

export default Createpost;

