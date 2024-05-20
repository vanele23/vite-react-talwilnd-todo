import TodoItem from "./TodoItem";
import IconCross from "./icons/IconCross";

const TodoList = ({todos, updateToDo, removeToDo}) => { 
    return (
        <div className='bg-white rounded-md mt-8 rounded-t-md' >
        {todos.map((todo) => (
                 <TodoItem key={todo.id} todo={todo} updateToDo={updateToDo} removeToDo={removeToDo}/>
        ))}
       

        
    
     
    
      </div>
    )
 }
 export default TodoList;