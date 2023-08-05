import { Outlet } from "react-router-dom";
import CardMenu from "../../ui/CardMenu";

const MenuPage = () => {
    return ( <div className=" min-h-screen">
    <CardMenu/>
    <Outlet/>
    </div> );
}
 
export default MenuPage;