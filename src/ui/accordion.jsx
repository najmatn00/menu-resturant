import { useState } from 'react';
import {FaAngleDown} from 'react-icons/fa'
const Accordion = ({title,children,childrenClass="pl-4 py-2"}) => {
    const [show,setShow]=useState(false)
    // 
    let toggleAccordion=()=>{
      if(show){
        setShow(false)
      }
      else(
        setShow(true)
      )
    }
    
    
    return ( <>
       <div className="flex justify-between items-center mt-2">
        <p>{title}</p>
        <FaAngleDown className='cursor-pointer' onClick={toggleAccordion}/>
       </div>
       {show && <div className={childrenClass}>{children} </div>}
       
    </> );
}
 
export default Accordion;