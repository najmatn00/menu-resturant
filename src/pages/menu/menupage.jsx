import { Outlet } from "react-router-dom";
import CardMenu from "./CardMenu";

const MenuPage = () => {
    return ( <div className=" min-h-screen">
    <CardMenu/>
    <Outlet/>
    </div> );
}
 
export default MenuPage;