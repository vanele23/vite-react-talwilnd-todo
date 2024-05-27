import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, updateToDo, removeToDo}) => { 
    const {id, title, completed}=todo;
    console.log(todo);
    return (
        <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4 dark:bg-gray-800 dark:text-gray-300'>
        {/*<button className='rounded-full border-2 w-5  h-5 inline-block flex-none'></button>*/}
        <button className={`w-5  h-5 rounded-full  border-2 ${completed ? 
        "grid flex-none place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center" 
        : "inline-block flex-none" }`} onClick={()=>updateToDo(id)} >
            {completed && <IconCheck /> }
        
        </button>
        
        <p className={`text-gray-600 grow' ${completed && "line-through"}`}>{title}</p>
        <button className='flex-none' onClick={()=>removeToDo(id)}>

          <IconCross />
        </button>
      </article>
    )
 }
 export default TodoItem;