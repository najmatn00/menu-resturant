import { useParams } from "react-router-dom";
import { menuList } from "../data/menu-lis";
const DetailProduct = () => {
    let endPoint=useParams();
    console.log(typeof endPoint);
    let userChoice=menuList.filter((item)=>item.id===endPoint)
    console.log(userChoice);
    return ( <>
    <h1>gav bozorg</h1>
    
    </> );
}
 
export default DetailProduct;