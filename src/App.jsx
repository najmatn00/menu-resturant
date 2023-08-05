import Header from './header/header'
import routes from './routes'
import "./index.css"
import CreatContext from "./CreatContex"
import {useRoutes } from 'react-router-dom'
import ToggleTheme from './ui/toggleTheme'
import { useEffect,useRef,useState } from 'react'
function App() {

      // true => lite 
      // false => dark
      let [theme,setTheme]=useState(false);
      let router = useRoutes(routes);
      // accses the element for changing theme 
      let refTheme =useRef()
      useEffect(()=>{
         if(theme){
            refTheme.current.className = " "
         }
         else {
            refTheme.current.className="dark"
         }
      },[theme])
      
    
 return(
 <CreatContext>
    <div ref={refTheme} class="dark">
      <div  className="bg-[#E7E0E0] dark:bg-[#111111] dark:text-white min-h-screen ">
         <Header/>
         {router}
         
      </div>
     <ToggleTheme theme={theme} setTheme={setTheme}/>
    </div>
 </CreatContext>)
}

export default App
