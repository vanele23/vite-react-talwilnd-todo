import { useState } from "react";

const TodoCreate = ({createToDo}) => { 
    const [title, setTitle]=useState('');
    const handleSubmitAddToDo=(e)=>{
        e.preventDefault();
        if (title.trim().length>0)
        {
            createToDo(title);
            setTitle('');
        }
        else {
            return setTitle('');
        }
        
    };
    return (
    <form onSubmit={handleSubmitAddToDo} className='dark:bg-gray-800 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8'>
        <span className='rounded-full border-2 w-5  h-5 inline-block'></span>
        <input 
            className='w-full text-gray-400 outline-none dark:bg-gray-900' 
            type='text' 
            placeholder='Create a new todo' 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
     </form>
     )
 }
 export default TodoCreate;