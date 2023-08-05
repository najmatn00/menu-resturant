import CartOrder from "./cartOrder";
import { useContextStateHistoryOrder } from "../../CreatContex";
import { useState } from "react";
const OrderDashbord = () => {
    let {Orders} =useContextStateHistoryOrder();
    let [showOrders,setShowOrders] =useState(Orders);
    console.log(Orders);
    let getProdactCount=(a)=>{
        let count=0;
        a.prodact.map((e)=>{
            count+=e.count
        })
        return count
    }
    let cow=(a)=>{
        console.log(a);
        const timeString = a.time;
        const [hours, minutes] = timeString.split(':').map(Number);
        
        const totalMinutes = hours * 60 + minutes;
        // console.log(totalMinutes); // Output: 722
        return totalMinutes
    }
    let filterByPrice=()=>{
        let l=[...Orders]
       l.sort((first,secand)=>{
        return   secand.total-first.total;
        })
        
        setShowOrders(l)
    // console.log(showOrders);
    }
    let filterByCount=()=>{
        let l=[...Orders]
       l.sort((first,secand)=>{
        return   getProdactCount(secand)-getProdactCount(first);
       })
       setShowOrders(l)
    }

    let filterByDate=()=>{
    let B=[...Orders]
    B.sort((a,b)=>{
        return cow(b)-cow(a)
    })
    setShowOrders(B)
    }
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
