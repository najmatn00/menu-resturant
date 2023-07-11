import pasta from "../assets/img/foodd.png";
import cartImg from "../assets/img/unnamed.png";
import { AiOutlineStar } from 'react-icons/ai';
import { useContextState } from "../CreatContex";
const LiMenu = ({foodName,discripton,star,price,category,key,item}) => {
    let {cart,setCart}=useContextState();
    
   
    let clickHandler=()=>{
        setCart(e=>[...e,item])
        // console.log(cart);
    }
    return ( <>
    <ul>
        <li className="border p-4  bg-[#F7F7F7] rounded-xl relative">
            <img className=" w-52 h-52" src={pasta} />
            <img onClick={clickHandler} className="w-8 h-8 absolute -top-4 right-2 cursor-pointer" src={cartImg} />
            <h2  className="foodname ">{foodName}</h2>
            <p className="dis">{discripton}</p>
            <div className="flex items-center">
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <p className="ml-2 star">{star}</p>
            </div>
            <div className="flex items-center ">
                <p className="price">{price}</p>
            </div>
        </li>
    </ul>
    </> );
}
 
export default LiMenu;