import { useParams } from "react-router-dom";
import { menuList } from "../data/menu-lis";
const DetailProduct = () => {
    //product id clicked by user
    let endPoint=useParams();
    //user choise is for showing the product the user clicked on
    let userChoice=menuList.filter((item)=>item.id===Number(endPoint.id))
    return ( <div className="flex items-center justify-center bg-transparant-black h-screen mt-16 fixed top-0 left-0 w-full">
    
    </div> );
}
 
export default DetailProduct;