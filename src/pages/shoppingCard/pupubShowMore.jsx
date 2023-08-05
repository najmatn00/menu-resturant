import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const PupubShowMore = ({setShowMore,prodact}) => {
    console.log(prodact);
    let clickHandlerClose=()=>{
        setShowMore(false)
    }
    return (<>
    
    <div className="bg-transparant-black  flex justify-center items-center h-screen w-screen fixed top-16 left-0 ">
        <div className=" border dark:bg-gray-600 bg-[#EBE9F5] w-96 h-96 rounded-3xl">
            <div className="flex items-center">
                <div className=" flex justify-end w-full mr-4 m-2">
                     <AiOutlineCloseCircle onClick={clickHandlerClose} className='w-8 h-8'/>
                </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="">
                {prodact.map((e)=>{
                    return(
                        <div className="flex justify-evenly my-4">
                            <p>{e.prodact.name}</p>
                            <p>{e.prodact.price}</p>
                            <p>{e.count}</p>
                        </div>
                    )
                })}
               
            </div>
        </div>
    </div>
        
 
    </> );
}
 
export default PupubShowMore;