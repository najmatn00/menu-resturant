import { useContextState,useContextStateHistoryOrder } from "../../CreatContex";
import Button from "../../ui/Button"

const PaymentSummary = () => {
    let {cart,setCart}=useContextState();
    let {Orders,setOrders}=useContextStateHistoryOrder();

    let totalPrice;
    let getTotal=(items)=>{
        
        totalPrice=0;
        items.map(item=>{
            totalPrice+=item.prodact.price*item.count
        })
        return totalPrice
    }
    // this is for add orders to history
    let clickHandlerBuy = ()=>{
        totalPrice = 0
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() ;
        setOrders(e=>{
            return [...e, {
                "time":time,
                "prodact":cart,
                "id":Math.floor(Math.random() * 100000),
                "total":getTotal(cart)
            }]
        })
        setCart([]);
        console.log(Orders);
    }

 
    return (<div className="">
    <h2 className="Robt_bold">Payment Summary</h2>
    <ul>
        <li className="border bg-white w-80 h-80 rounded-xl dark:bg-gray-600">
            <h2 className="border m-4 text-center dark:bg-[#111111] dark:border-0  rounded-xl">UNREGISTERED ACCOUNT</h2>
            <div className="flex justify-between mx-3">
                <p className="text-[#ddd1e9]">Transactoin code</p>
                <p>vc115665</p>
            </div>
            <div className="flex justify-between mx-3 mt-2">
            <input type="text" placeholder="COUPON CODE"  className=" outline-none rounded-md pl-2 dark:bg-gray-500 text-white"/>
            <Button textColor={"text-[#7FB3F4] dark:text-white"} color={"bg-[#DDEDFD] dark:bg-red-700"}>Apply</Button>
            </div>
            <div className="border h-.5 my-2 mx-2 bg-slate-100"></div>
            <div className="flex justify-between mx-3 mt-2">
                <p className="text-[#ddd1e9]">Order Summary</p>
                <p>{getTotal(cart)}</p>
            </div>
            <div className="flex justify-between mx-3 mt-2">
                <p className="text-[#ddd1e9]">Additional Servise</p>
                <p className="text-[#7FB3F4]">$10</p>
            </div>
            <div className="flex justify-between mx-3 mt-2">
                <p className="text-[#ddd1e9]">Total Ampount</p>
                <p>{getTotal(cart)>0? getTotal(cart)+10:
                0
                }</p>
            </div>
           <div className="flex items-center mt-4 ml-4 justify-start">
           {cart.length>0?
                        <Button click={clickHandlerBuy} color={"text-white"}>buy !!!!</Button>
                     :
                        null
                    }
           </div>
        </li>
    </ul>
    </div>  );
}
 
export default PaymentSummary;