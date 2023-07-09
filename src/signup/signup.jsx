import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const SignUp = ({closeHandler}) => {

    let clickHandlerClose=()=>{
        closeHandler(false)
       
    }
    return (<>
    
    <div className="bg-transparant-black flex justify-center items-center h-screen w-screen fixed top-16 left-0 ">
    <div className=" border bg-[#EBE9F5] w-96 h-96 rounded-3xl">
    <div className="flex items-center">
    <p className="Robt_bold m-4">Sign In</p>
    <div className="ml-64">
        <AiOutlineCloseCircle onClick={clickHandlerClose} className='w-8 h-8'/>
    </div>
    </div>
    <div className="w-full h-0.5 bg-white"></div>
    <div className="flex flex-col gap-2 mx-6 ">
    <input className="mt-6 py-2 rounded-xl px-2" type="text" placeholder="E-mail" />
    <input className="py-2 rounded-xl px-2" type="text" placeholder="Password" />
    </div>
    <p className="text-center mt-4 Robt_regular text-sm">Forget your Password ?</p>
    <div className="flex justify-center items-center">
    <button className="bg-[#D41B27] text-white  py-2 mt-4 rounded-xl px-36">Sign in</button>
    </div>
    <p className="Robat_regular text-xs text-center mt-16 ">Already have an account ? Sign up</p>
    </div>
        
    </div> 
    </> );
}
 
export default SignUp;