import Order from "./order";
import PaymentSummary from "./paymentSummary";
import { useContextState } from "../CreatContex";
const ShopCart = () => {
    let {cart} = useContextState();
   
    return (
            <div className="flex items-center">
                <div className="">
                   {cart.lenght>0?
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
                     <div className="bg-white mx-12 mt-9 justify-center border rounded-xl list-none  p-6 flex items-center gap-2 w-80 h-80 ">
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