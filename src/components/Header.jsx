import { useEffect, useRef, useState } from 'react'
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";


const Header = () => { 
    const initialStateDarkMode= localStorage.getItem("theme")=='dark';
    const [darkMode, setDarkMode]=useState(initialStateDarkMode);
    const refHeader= useRef(null);
    useEffect(()=>{
      if (darkMode) {
        document.documentElement.classList.add('dark');
        //refHeader.current.classList.add("bg-gray-900");
        localStorage.theme = 'dark'
        console.log(refHeader.current);
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light';
      }
    }, [darkMode])
    return (
    <header className='container mx-auto px-4 pt-8 ' ref={refHeader}>
    <div className='flex justify-between'>
      <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.5em]'>Todo</h1>
      <button className='px-4 mx-auto' onClick={()=>setDarkMode(!darkMode)}>
        {
          darkMode? <IconMoon/>:  <IconSun/>
        }
        
          </button>
    </div>
   
  </header>
  )
 }
 export default Header;