import { useState } from "react";
import LiMenu from "./liMenu";
import { useContextStateshowPupUpDetailFood } from "../../CreatContex";
import { menuList } from "../../data/menu-lis";
import FiltterProdact from "./filtter";
import { Link } from "react-router-dom";

const CardMenu = () => {
    let text=" Lorem ipsum dolor sit amet."
    
    let [foodlist,setfoodlist]=useState(menuList);
    

    let clickHandlerCategory=(event)=>{
        setfoodlist(menuList.filter((item)=>{
          return  item.category===event.target.innerText
        }))
        
    }
    // filterd by star
    let clickHandlerStar=(e)=>{
        setfoodlist(menuList.filter((item)=>{
            return  item.star==Number(e.target.children[0].ariaLabel[0]);
          }))
      
    }
    // filter by price in menu 
    let changeHandlerRangePrice=(event)=>{
        
        setfoodlist(menuList.filter((item)=>{
            
            return item.price<=event.target.value
        }))
    }
    // delet all filter in use
    let deleteHandler=()=>{
        setfoodlist(menuList);
    }
    
    return ( <div className="flex flex-col-reverse md:flex-row">
    <div className="flex md:w-4/5 justify-evenly mt-6 flex-wrap gap-8 ml-4">
        {foodlist.map((item)=>{

                        return <Link  
                        
                        to={`${item.id}`}>
                            <LiMenu foodName={item["name"]} price={item["price"]} category={item["category"]} key={item["key"]} discripton={text} star={item["star"]} item={item}/>
                        </Link> 
                    })}
                
                </div>
               
                <FiltterProdact 
                clickHandlerStar={clickHandlerStar} 
                clickHandlerCategory={clickHandlerCategory}
                deleteHandler={deleteHandler}
                changeHandlerRangePrice={changeHandlerRangePrice}
                />
                
    </div> );
}
 
export default CardMenu;