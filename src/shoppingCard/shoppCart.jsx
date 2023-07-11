import Order from "./order";
import PaymentSummary from "./paymentSummary";
import { useContextState } from "../CreatContex";
const ShopCart = () => {
    let {cart} = useContextState();
   
    return (
            <div className="flex">
                <div className="">
                    {cart.map(e=>{
                       let {prodact,count}= e;
                       console.log(prodact);
                        return (
                            <Order
                            name={prodact.name} 
                            price={prodact.price} 
                            star={prodact.star} 
                            discripton={prodact.discripton}
                            count={count}
                            />
                            
                        )

                    })}
                </div>
                <div className=" ">
                    <PaymentSummary/>
                </div>
        
            </div> 
     );
}
 
export default ShopCart;