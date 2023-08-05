import pasta from "../../assets/img/foodd.png";
import cartImg from "../../assets/img/unnamed.png";
import { AiOutlineStar } from 'react-icons/ai';
import { useContextState } from "../../CreatContex";
import { useContextStateshowPupUpDetailFood } from "../../CreatContex";
import { Rating } from "@mui/material";
const LiMenu = ({foodName,discripton,star,price,item}) => {
    
    // get data of cart and push new data on it
    let {cart,setCart}=useContextState();

    //  show pupup when click on card menu
    let {setShowPubhup} =useContextStateshowPupUpDetailFood();

    // this handler use to pushing new data to context history order
    let clickHandler=()=>{
        let pushProdact={
            prodact:item,
            count:1
        }
        
        let respanse =cart.find(e=>e.prodact.name===item.name);
        // respanse is check the item click is in the order list or not
        if (undefined!==respanse){
           
                setCart(e => {
                    // e is all the item in list 
                  return e.map(obj => {
                    if (obj.prodact.name === respanse.prodact.name) {
                        
                      return { ...obj, count: obj.count+=1 };
                    }
                    return obj;
                  });
                });
             
              
        }else{
            // when this code run this mean the item is not in the order
            console.log("cant find");
            setCart(e=>[...e,pushProdact])
            console.log("obj added ");

        }
        console.log(cart);
    }
    let onOpenPubUpHandler=()=>{
        setShowPubhup(true);
    }
    return ( <>
    <ul>
        <li className="border p-4 dark:bg-gray-600 dark:border-0  bg-[#F7F7F7] rounded-xl relative">
            <img onClick={clickHandler} className="w-8 h-8 absolute -top-4 right-2 cursor-pointer" src={cartImg} />
           <div className="" onClick={onOpenPubUpHandler}>
            <img className=" w-52 h-52" src={pasta} />
                <h2  className="foodname ">{foodName}</h2>
                <p className="dis">{discripton}</p>
                <div className="flex items-center">
                    <Rating value={star}  name="read-only" readOnly/>
                </div>
                <div className="flex items-center ">
                    <p className="price">{price}</p>
                </div>
           </div>
        </li>
    </ul>
    </> );
}
 
export default LiMenu;