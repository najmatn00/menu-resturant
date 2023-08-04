import Header from './header/header'
import routes from './routes'
import "./index.css"
import CreatContext from "./CreatContex"
import {useRoutes } from 'react-router-dom'
import ThemeMain from './ui/toggleTheme'
import { useEffect,useRef,useState } from 'react'
function App() {

      let [theme,setTheme]=useState(false);
      let router = useRoutes(routes);
      let refTheme =useRef()
      useEffect(()=>{
         if(theme){
            console.log("t");
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
     <ThemeMain theme={theme} setTheme={setTheme}/>
    </div>
 </CreatContext>)
}

export default App
