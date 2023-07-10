import Li from "./Li";
import { BsHandbag } from 'react-icons/bs';
import Button from "../ui/Button"
import { useContextState } from "../CreatContex";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUp from "../signup/signup";


const Header = () => {
    let navigate= useNavigate();
    let [showPubhup,setShowPubhup]=useState(false);
    let clickHandler=()=>{
        // navigate("/signup")
        setShowPubhup(true)
    }
    let {cart}=useContextState();
    return ( <div className=" h-16 flex justify-between px-2 md:px-0 items-center md:gap-32 sticky bg-[#E7E0E0] z-40  top-0 ">
            <Link to={"/"} className="block">
            <div className="flex md:ml-24">
                <h2  className="Robt_medium text-3xl">F</h2>
                <h2  className="text-red-600 Robt_medium text-3xl">oo</h2>
                <h2  className=" text-3xl Robt_medium">dy</h2>
            </div>
            </Link>
            <div className="md:flex md:gap-20 hidden">
                <Li color={"text-red-600"}><Link to='/'>Home</Link></Li>
                <Li><Link to='/menupage'>Menu</Link></Li>
                <Li><Link to={'/about-us'}>About us</Link></Li>
                <Li><Link to={'/contact'}>Contact</Link></Li>
            </div>
            <div className="flex items-center gap-4 ml-6">
                <div className=" relative">
                    <BsHandbag className="w-6 h-6  top-0"/>
                    {cart.length>0?
                    (<div className="border rounded-full w-6 h-6 bg-red-600 absolute -top-2 left-4 text-xs text-center flex justify-center items-center text-white">{cart.length}</div>)
                    :null
                }
                    
                </div>
                <Button click={clickHandler}  textColor={" text-white"}>Sign Up</Button>
                {showPubhup && <SignUp closeHandler={setShowPubhup}/>}
            </div>
    </div> );
}
 
export default Header;