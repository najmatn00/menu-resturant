import CartOrder from "./cartOrder";
import { useContextStateHistoryOrder } from "../CreatContex";
import { useState } from "react";
const OrderDashbord = () => {
    let {Orders} =useContextStateHistoryOrder();
    let [showOrders,setShowOrders] =useState(Orders);
   
    
    let filterByPrice=()=>{

        let l=[...Orders]
       l.sort((first,secand)=>{
        return   secand.total-first.total;
        })
        
        setShowOrders(l)
    // console.log(showOrders);
    }
    let filterByCount=()=>{
        
    }
    let filterByDate=()=>{
        
    }
    let deletFiltter=()=>{
        setShowOrders(Orders)
    }
    return ( 
        <div className="w-1/2 flex flex-col gap-2 pt-4">
                {showOrders.length>0?
                   <div className="flex items-center justify-center flex-col">
                    
                        <ul className="w-5/6 flex items-center justify-evenly bg-white rounded-xl py-4 mb-4 ">
                            <li onClick={filterByPrice} className=" cursor-pointer ">price</li>
                            <li onClick={filterByCount} className=" cursor-pointer ">count</li>
                            <li onClick={filterByDate} className=" cursor-pointer ">date</li>
                            <li onClick={deletFiltter} className=" cursor-pointer ">delet filtter</li>
                        </ul>
                    
                    { showOrders.map(order=>{
                        return <CartOrder id={order["id"]} prodact={order["prodact"]} time={order["time"]}/>
                    })}
                   </div>
            :
                <div className="bg-white w-full h-64 flex items-center justify-center rounded-lg">
                   <h1 className="text-2xl -mt-4"> no prodact </h1>
                </div>   
            }
        </div>
        );
}
 
export default OrderDashbord;
