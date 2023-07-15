import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
    return ( 
        <>
        <div className=" flex items-center justify-center flex-col">
            <ul className="w-2/4 h-16 mt-4 rounded-lg bg-white flex justify-evenly items-center ">
                <NavLink to={"order"}>orders</NavLink>
                <NavLink to={"acount"}>Acounts</NavLink>
            </ul>
            <div className="w-full flex items-center justify-center">
                <Outlet/>
            </div>
        </div>
        </>
     );
}
 
export default Dashbord;