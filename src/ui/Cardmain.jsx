
import Limain from "../main/limain";
import { menuList } from "../data/menu-lis";
const Card = () => {
    let text=" Lorem ipsum dolor sit amet."
    return ( <>
    <ul>
       {/* <Limain/> */}
       {menuList.map((item)=>{
       return <Limain foodname={item["name"]} price={item["price"]} text={text} item={item}></Limain>
       })}
    </ul>
 
    </> );
}
 
export default Card;