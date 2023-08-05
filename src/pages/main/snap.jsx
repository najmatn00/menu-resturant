import { Rating } from "@mui/material";
import img from "../../assets/img/pizza.webp"
import img2 from "../../assets/img/foodd.png"
import {menuList} from '../../data/menu-lis.js'

const Snap = () => {
      let foodlist=[...menuList];
      foodlist.sort((a,b)=>b.star-a.star)
      console.log(foodlist);
    return (
    <div className=" md:px-32 px-10 h-auto">
      <div className=" overflow-x-auto snap-x w-full flex gap-8 md:mt-14 mt-20 over ">
        
                  {foodlist.map((item)=>{
                        return ( 
                        <div className="snap-start bg-white dark:bg-gray-600 rounded-lg p-4 ">
                           <div className="w-fit flex flex-col gap-4">
                               <img src={img} alt="" />
                                 <p>{item.name}</p>
                                 <p>
                                    <Rating value={item.star}/>
                                 </p>
                           </div>
                       
                        </div>)
                  })}
                   </div>
    </div>
      );
}
 
export default Snap;