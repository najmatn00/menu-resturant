import Order from "./order";
import PaymentSummary from "./paymentSummary";
import { useContextState } from "../CreatContex";
const ShopCart = () => {
    let {cart} = useContextState();
    console.log(cart);
    return (
            <div className="flex  justify-evenly">
                <div className=" w-2/3 bg-white rounded-md">
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
                     <div className=" mx-12 mt-9 justify-center border rounded-xl list-none  p-6 flex items-center gap-2">
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