import { NavLink, Outlet } from "react-router-dom";
import { useContextStateUser } from "../CreatContex";
const Dashbord = () => {
    let {setUser}=useContextStateUser();
    let isActivePage=(e)=>{
        if(e.isActive){
            return "text-red-600"
        }
    }
    let logOut=()=>{
      setUser(" ");
    }
    return ( 
        <>
        <div className=" flex items-center justify-center flex-col">
            <ul className="md:w-2/4 w-3/4 h-16 mt-4 rounded-lg bg-white flex justify-evenly items-center ">
                <NavLink className={isActivePage} to={"order"}>orders</NavLink>
                <NavLink className={isActivePage} to={"acount"}>Acounts</NavLink>
                <NavLink onClick={logOut} to={"/"}>Log Out</NavLink>
            </ul>
            <div className="w-full flex items-center justify-center">
                <Outlet/>
            </div>
        </div>
        </>
     );
}

export default Dashbord;