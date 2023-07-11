import { menuList } from "../data/menu-lis";
import imgfood from '../assets/img/foodd.png';
import { useContextState } from "../CreatContex";
const Order = () => {
    let {cart,setCart}=useContextState()
    return ( <>
    {cart.map((e)=>{
       
        return(
        <>
        <li className="bg-white mx-12 mt-6  border rounded-xl list-none  p-6 flex items-center gap-2" >
            <div className="">
            <img className="w-24 h-24 rounded-full" src={imgfood} alt="" srcset="" />
            </div>
            <div className="">
            <p>{e.name}</p> 
            <p>{e.discripton}</p>
            <p>{e.category}</p>
            <p>star : {e.star}</p>
            </div>
            <p className="ml-28">price : {e.price} &</p>
            <div className="flex items-center ">
            <p className="ml-20">quantity : </p>
            <p className="border w-6 h-6 text-center">{}</p>
            </div>
        </li>
        </>
        )
    })}
    </> );
}
 
export default Order;