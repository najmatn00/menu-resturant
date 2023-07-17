import { useState } from "react";
import PupubShowMore from "../shoppingCard/pupubShowMore";

const CartOrder = ({id,time,prodact}) => {
    const [showMore,setShowMore]=useState(false);

    let total =0
    prodact.map(item=>{
       total+= item.prodact.price*item.count
    })
    let clickHandlerShowMore=()=>{
        setShowMore(true)
    }
    
    return (
        <>

            <div className="flex border-2 border-orange-300 bg-white rounded-2xl h-24 items-center w-full ">
            <div className="flex w-1/2 flex-col items-start ml-4 gap-2">
                <h1 className="text-xl">#{id}</h1>
                <p className="text-xs cursor-pointer" onClick={clickHandlerShowMore}>show more</p>
            </div>
            <div className="flex flex-col items-end mr-4 w-1/2 gap-2">
                <p >{time}</p>
                <h1 className=" text-xl">{total+10}$</h1>
            </div>
            { showMore && <PupubShowMore prodact={prodact}  setShowMore={setShowMore}/>}
            </div>
        
        </>
      );
}
 
export default CartOrder;