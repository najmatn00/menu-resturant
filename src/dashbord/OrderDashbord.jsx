import CartOrder from "./cartOrder";
import { useContextStateHistoryOrder } from "../CreatContex";
const OrderDashbord = () => {
    let {Orders} =useContextStateHistoryOrder();

    return ( 
        <div className="w-1/2 flex flex-col gap-2 pt-4">
                {Orders.lenght>0?
                    Orders.map(order=>{
                    return <CartOrder id={order["id"]} prodact={order["prodact"]} time={order["time"]}/>
                }) 
            :
                <div className="bg-white w-full h-64 flex items-center justify-center rounded-lg">
                   <h1 className="text-2xl -mt-4"> no prodact </h1>
                </div>   
            }
        </div>
        );
}
 
export default OrderDashbord;
