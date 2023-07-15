import { useState } from "react";
import { useContextState } from "../CreatContex";
import Button from "../ui/Button"
const PaymentSummary = () => {
    let {cart}=useContextState();
    // let [totalPrice,setTotalPrice]=useState(0);
    // console.log(cart);
    let totalPrice=0;
    cart.map((item)=>{
        // setTotalPrice(totalPrice+item.price)
       
       totalPrice=totalPrice+(item.prodact.price*item.count)
    })
    console.log(totalPrice);
    return (<div className="">
    <h2 className="Robt_bold">Payment Summary</h2>
    <ul>
        <li className="border bg-white w-80 h-80 rounded-xl">
            <h2 className="border m-4 text-center bg-[#EBEAEF] rounded-xl">UNREGISTERED ACCOUNT</h2>
            <div className="flex justify-between mx-3">
                <p className="text-[#ddd1e9]">Transactoin code</p>
                <p>vc115665</p>
            </div>
            <div className="flex justify-between mx-3 mt-2">
            <input type="text" placeholder="COUPON CODE" />
            <Button textColor={"text-[#7FB3F4]"} color={"bg-[#DDEDFD]"}>Apply</Button>
            </div>
            <div className="border h-.5 my-2 mx-2 bg-slate-100"></div>
            <div className="flex justify-between mx-3 mt-2">
                <p className="text-[#ddd1e9]">Order Summary</p>
                <p>{totalPrice}</p>
            </div>
            <div className="flex justify-between mx-3 mt-2">
                <p className="text-[#ddd1e9]">Additional Servise</p>
                <p className="text-[#7FB3F4]">$10</p>
            </div>
            <div className="flex justify-between mx-3 mt-2">
                <p className="text-[#ddd1e9]">Total Ampount</p>
                <p>{totalPrice>0? totalPrice+10:
                0
                }</p>
            </div>
           <div className="flex items-center text-sm mt-12 justify-center">
           <p>SALE EXPIRING IN :</p>
            <p className="text-[hsl(355,60%,62%)] font-medium">21 HOURS, 31 MINUTES</p>
           </div>
        </li>
    </ul>
    </div>  );
}
 
export default PaymentSummary;