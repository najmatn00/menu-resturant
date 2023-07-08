import pasta from "../assets/img/foodd.png";
import cartImg from "../assets/img/unnamed.png";
import { AiOutlineStar } from 'react-icons/ai';
import { useContextState } from "../CreatContex";
import { useRef } from "react";
const LiMenu = ({foodName,discripton,star,price,category,key}) => {
    let {cart,setCart}=useContextState();
    let refName=useRef()
    let clickHandler=()=>{
        setCart(e=>[...e,refName.current.textContent])

        // console.log(cart);
    }
    return ( <>
    <ul>
        <li className="border p-4  bg-[#F7F7F7] rounded-xl relative">
            <img className=" w-52 h-52" src={pasta} />
            <img onClick={clickHandler} className="w-8 h-8 absolute -top-4 right-2 " src={cartImg} />
            <h2 ref={refName} className="foodname ">{foodName}</h2>
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