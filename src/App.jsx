import { useEffect, useState } from 'react'

import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'

/*const initialStateTodos=[
  { id:1, title: "Complete online Javascript blueweb Course", completed:true },
  { id:2, title: "Go to the gym", completed:false },
  { id:3, title: "10 minutos meditation", completed:false },
  { id:4, title: "Pick up groceries", completed:false },
  { id:5, title: "Complete todo app on Frontend Mentor", completed:false }
]*/
const initialStateTodos=JSON.parse(localStorage.getItem("todos")) || [];
function App() {  
  const [todos, setTodos]=useState(initialStateTodos);
  const createToDo =(title)=>{
    const newTodo={
      id:Date.now(),
      title, 
      completed:false
    };
    setTodos([...todos, newTodo]);
  };
  const removeToDo =(id)=>{
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const updateToDo =(id)=>{

    setTodos(todos.map((todo)=>todo.id===id?{...todo, completed: !todo.completed}:todo));
  };
  const computedItemsLeft =todos.filter((todo) => !todo.completed).length;
  const clearCompleted =()=>{
    setTodos(todos.filter((todo)=> !todo.completed));
  }
  const [filter, setFilter]=useState('active');
  const changeFilter=(filter)=>setFilter(filter);
  const filteredTodos=()=>{
    
      if (filter === 'all'){
        return todos;
      } else if(filter === 'active'){
        return todos.filter((todo)=>!todo.completed);
      } else if(filter === 'completed'){
        return todos.filter((todo)=>todo.completed);
      }
    }
    useEffect(()=>{
      console.log("todos")
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
    <div className="
    bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen
    dark:bg-gray-500 dark:bg[url('./assets/images/bg-mobile-dark.jpg')] 
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] md: max-w-xl">
    
    <Header />
    <main className='container mx-auto px-4 mt-8 dark:bg-gray-900 md: max-w-xl'>
     
      <TodoCreate createToDo={createToDo}/>
      
      <TodoList todos={filteredTodos()} updateToDo={updateToDo} removeToDo={removeToDo}  />
      
      <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
     
      <TodoFilter changeFilter={changeFilter}  filter={filter}/>
    </main>   
  
    <p className='text-center dark:text-gray-400'>Drag and Drop to reorder list</p>
    </div>
  )
}

export default App
