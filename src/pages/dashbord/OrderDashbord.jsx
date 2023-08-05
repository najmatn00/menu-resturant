import CartOrder from "./cartOrder";
import { useContextStateHistoryOrder } from "../../CreatContex";
import { useState } from "react";
const OrderDashbord = () => {
    let {Orders} =useContextStateHistoryOrder();
    let [showOrders,setShowOrders] =useState(Orders);
  
    let getProdactCount=(a)=>{
        let count=0;
        a.prodact.map((e)=>{
            count+=e.count
        })
        return count
    }
    // return time of order to pushing orders history prodact
    let getTime=(a)=>{
        
        const timeString = a.time;
        const [hours, minutes] = timeString.split(':').map(Number);
        
        const totalMinutes = hours * 60 + minutes;
        return totalMinutes
    }

    let filterByPrice=()=>{
        let filterdProdact=[...Orders]
        filterdProdact.sort((first,secand)=>{
            return   secand.total-first.total;
        })
        
        setShowOrders(filterdProdact)
    }
    let filterByCount=()=>{
        let copyProdact=[...Orders]
       copyProdact.sort((first,secand)=>{
        return   getProdactCount(secand)-getProdactCount(first);
       })
       setShowOrders(copyProdact)
    }

    let filterByDate=()=>{
        let copyProdact=[...Orders]
        copyProdact.sort((a,b)=>{
            return getTime(b)-getTime(a)
        })
        setShowOrders(copyProdact)
     }
    //  delet all filterd in use
    let deletFiltter=()=>{
            setShowOrders(Orders)
    }
    return ( 
        <div className="md:w-1/3 w-2/3 flex flex-col gap-2 pt-4 ">
                {showOrders.length>0?
                   <div className="flex items-center justify-center flex-col ">
                    
                        <ul className="md:w-5/6 w-full flex items-center justify-evenly  bg-white rounded-xl py-4 mb-4 dark:bg-gray-600">
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
                <div className="bg-white w-full h-64 flex items-center justify-center rounded-lg dark:bg-gray-600">
                   <h1 className="text-2xl -mt-4"> no prodact </h1>
                </div>   
            }
        </div>
        );
}
 
export default OrderDashbord;
