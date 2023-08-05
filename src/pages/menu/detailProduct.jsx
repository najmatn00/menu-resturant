import { useParams } from "react-router-dom";
import { menuList } from "../../data/menu-lis";
import pasta from "../../assets/img/foodd.png";
import Button from '../../ui/Button'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useContextState, useContextStateshowPupUpDetailFood } from "../../CreatContex";

const DetailProduct = () => {
    //product id clicked by user
    let endPoint=useParams();
    //user choise is for showing the product the user clicked on
    let [userChoice]=menuList.filter((item)=>item.id===Number(endPoint.id))
    
    let {showPubhup,setShowPubhup} =useContextStateshowPupUpDetailFood();
    let {cart,setCart} =useContextState();
    let clickHandler=()=>{
        // navigate("/signup")
        setShowPubhup(false)
       
    }
    let addToCart=()=>{
     console.log("t");
        let pushProdact={
            prodact:userChoice,
            count:1
        }
        
        let respanse =cart.find(e=>e.prodact.name===userChoice.name);
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
    return ( 
        <>
        {showPubhup &&
          <div className="flex items-center justify-center bg-transparant-black h-screen mt-16 fixed top-0 left-0 w-full">
              <div className="flex flex-col justify-around items-center dark:bg-gray-600 bg-white rounded-md md:w-1/3 md:h-3/5 -mt-10 relative py-5 md:py-0 w-3/4">
                <AiOutlineCloseCircle onClick={clickHandler} className='absolute right-3 top-3 w-8 h-8'/>
                <img className="md:w-64 md:h-64 w-48 h-48 rounded-full absolute md:-top-24 -top-16" src={pasta} alt="" />
                <div className="flex flex-col md:mt-32 mt-32 justify-center items-center md:gap-6 gap-4 h-full ">
                  <h1 className="w-full text-center Robt_bold text-2xl  md:mt-6">{userChoice.name}</h1>
                  <p className="w-2/3 Robt_regular text-center"> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ipsum aliquid, expedita ut molestiae libero. Autem blanditiis consectetur aut minima.
                  </p>
                  <div className="flex items-center justify-evenly w-2/3">
                    <Button click={addToCart} textColor={"text-white"}>buy !!!</Button>
                    <p className="price">{userChoice.price}$</p>
                  </div>
                </div>
              </div>
            </div>
            
           }
            </>
    );
}
 
export default DetailProduct;