import Li from "./Li";
import { BsHandbag } from 'react-icons/bs';
import Button from "../ui/Button"
import { useContextState } from "../CreatContex";
import { Link,NavLink} from "react-router-dom";
import { useState } from "react";
import { IsLogin } from "../utility/checkuserLogin";
import {AiOutlineMenu} from "react-icons/ai"
import SignIn from "../signup/signIn";
const Header = () => {
    
    let [showPubhup,setShowPubhup]=useState(false);
    let clickHandler=()=>{
        // navigate("/signup")
        setShowPubhup(true)
    }
    let {cart}=useContextState();
    let isActivePage=(e)=>{
        if(e.isActive){
            return "text-red-600"
        }
    }
    let countItem=()=>{
        let count=0;
        cart.forEach(element => {
            count=element.count+count;
        }
        );
        return count;
    }
    let [showMenu,setShowMenu]=useState(false);
    let menuClickHandler=()=>{
       setShowMenu(true)
    }
    let backgroudClickHandler=()=>{
        setShowMenu(false)
    }
    return (
         <div className="dark:bg-[#111111] h-16 flex justify-between px-2 md:px-0 md:mr-8 items-center md:gap-32 sticky bg-[#E7E0E0] z-40  top-0">
            <Link to={"/"} className="block">
                <div className="flex md:ml-24">
                    <h2  className="Robt_medium text-3xl">F</h2>
                    <h2  className="text-red-600 Robt_medium text-3xl">oo</h2>
                    <h2  className=" text-3xl Robt_medium">dy</h2>
                </div>
            </Link>
        <div className="md:flex md:gap-20 hidden">
            <Li><NavLink className={isActivePage} to='/'>Home</NavLink></Li>
            <Li><NavLink className={isActivePage}  to='/menupage'>Menu</NavLink></Li>
            <Li><NavLink className={isActivePage} to={'/about-us'}>About us</NavLink></Li>
            <Li><NavLink className={isActivePage} to={'/contact'}>Contact</NavLink></Li>
        </div>
       
        {showMenu && <div className=" md:hidden bg-[#e7e0e0] absolute top-0 right-0 text-right z-50 h-screen w-2/5 flex flex-col gap-4 p-6">
            <Li><NavLink className={isActivePage} to='/'>Home</NavLink></Li>
            <Li><NavLink className={isActivePage}  to='/menupage'>Menu</NavLink></Li>
            <Li><NavLink className={isActivePage} to={'/about-us'}>About us</NavLink></Li>
            <Li><NavLink className={isActivePage} to={'/contact'}>Contact</NavLink></Li>
            {IsLogin() && <NavLink to='/dashbord' >dashbord</NavLink>}
        </div>
        }
        {showMenu &&  <div onClick={backgroudClickHandler} className=" bg-transparant-black w-full h-screen fixed left-0 top-0"></div>}
       
        <div className="flex items-center gap-4 ml-6">
            <div className=" relative">
                <Link to={'/shoppCart'}><BsHandbag className="w-6 h-6  top-0"/></Link>
                {countItem()>0?
                (<div className="border rounded-full w-6 h-6 bg-red-600 absolute -top-2 left-4 text-xs text-center flex justify-center items-center text-white">{countItem()}</div>)
                :null
            }
            </div>
            <div className="md:hidden flex flex-end w-full ">
                <AiOutlineMenu onClick={menuClickHandler} className="w-6 h-6 mr-1"/>
            </div>
            {!IsLogin() && <Button click={clickHandler} classCss="border px-4 rounded-3xl bg-[#D41B27]  text-sm dark:border-0  shadow-md shadow-red-600"  textColor={" text-white"} >Sign In</Button>
            }
        <div className=" hidden md:block">
        {IsLogin() && <NavLink to='/dashbord' >dashbord</NavLink>}
        </div>
        {showPubhup && <SignIn closeHandler={setShowPubhup}/>}
        </div>
    </div>
    
    );
}
 
export default Header;