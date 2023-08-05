import img from "../../assets/img/foodd.png";
import cartImg from "../../assets/img/unnamed.png";

import { useContextState} from "../../CreatContex";

const Limain = ({foodname,price,text,item}) => {
    let {cart,setCart}=useContextState();
    let clickHandler=()=>{
        setCart(e=>[...e,item])

        console.log(cart);
    }
    return ( <>
     <li className="flex flex-col mt-24 border-2 rounded-3xl mb-6 ">
           <div className="border justify-center items-center rounded-3xl px-8 bg-gradient-to-b from-[#C5C2C3] to-[#EBE8E9] relative ">
                <img className="w-32 rounded-full -translate-y-16 shadow-xl " src={img} alt="" />
                <img onClick={clickHandler} className="w-8 h-8 absolute -top-12 right-6 cursor-pointer" src={cartImg} />
                <p  className="Robt_regular text-center font-bold -translate-y-12">{foodname}</p>
                <p className="-translate-y-5 text-sm text-center">{text}</p>
                <p className="Robt_regular text-center ">{price}
                </p>
           </div>
        </li>
        
    </> );
}
 
export default Limain;