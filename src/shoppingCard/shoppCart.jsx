import Order from "./order";
import PaymentSummary from "./paymentSummary";

const ShopCart = () => {
    return (<div className="flex">
    <div className="">
    <Order/>
    </div>
    <div className=" ">
    <PaymentSummary/>
    </div>
   
    </div>  );
}
 
export default ShopCart;