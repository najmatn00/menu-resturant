import CartOrder from "./cartOrder";
import { useContextStateHistoryOrder } from "../CreatContex";
const OrderDashbord = () => {
    let {Orders,setOrders} =useContextStateHistoryOrder();
    console.log(Orders);
    return ( 
        <div className="w-1/2 flex flex-col gap-2 pt-4">
            {Orders.map(order=>{
                return <CartOrder/>
            })}
        </div>
        );
}
 
export default OrderDashbord;