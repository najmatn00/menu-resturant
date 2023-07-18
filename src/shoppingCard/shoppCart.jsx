import Order from "./order";
import PaymentSummary from "./paymentSummary";
import { useContextState } from "../CreatContex";
import Button from "../ui/Button";
const ShopCart = () => {
    let {cart} = useContextState();

    return (
            <div className="flex md:flex-row items-center justify-center md:items-start flex-col gap-8 md:justify-evenly md:mt-8">
                <div className="md:w-2/3 w-full bg-white rounded-md pb-8">
                   {cart.length>0?
                    cart.map(e=>{
                        let {prodact}= e;
                         return (
                             <Order
                             name={prodact.name} 
                             price={prodact.price} 
                             star={prodact.star} 
                             discripton={prodact.discripton}
                             count={e.count}
                             />
                             
                         )
 
                     }):
                     <div className=" mx-12 mt-9 border rounded-xl list-none  p-12 flex items-center justify-center  ">
                        <p className="Robt_bold ">no prouduct</p>
                     </div>
                     
                     }
                     
                </div>
                <div className=" ">
                    <PaymentSummary/>
                </div>
        
            </div> 
     );
}
 
export default ShopCart;