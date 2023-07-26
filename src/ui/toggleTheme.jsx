import { useState } from "react";
import {BsFillSunFill,BsFillMoonFill} from "react-icons/bs"
const ThemeMain = ({theme,setTheme}) => {
    // false =>dark
    // true =>white
   
   let  chengeThemeHandler=()=>{
    setTheme(!theme)
   }
    return ( 
        <div className=" absolute bottom-5 left-10 w-16 h-16  rounded-full border ">  
               {theme?
                <div className=" w-full h-full bg-white rounded-full flex items-center justify-center">
                    <BsFillMoonFill  onClick={chengeThemeHandler} className="w-10 h-10 text-slate-800"/>
                </div>
                :
                <div className=" w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                     <BsFillSunFill onClick={chengeThemeHandler} className="w-10 h-10 text-white "/>
                </div>
               }
        </div>
     );
}
 
export default ThemeMain;