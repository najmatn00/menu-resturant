import { useState } from "react";
import LiMenu from "../menu/liMenu";

import { menuList } from "../data/menu-lis";
import FiltterProdact from "../layout/filtter";

const CardMenu = () => {
    let text=" Lorem ipsum dolor sit amet."
  
    let [foodlist,setfoodlist]=useState(menuList);
    let clickHandlerCategory=(event)=>{
        setfoodlist(menuList.filter((item)=>{
          return  item.category===event.target.innerText
        }))
        // console.log(event.target.innerText);
    }
    let clickHandlerStar=(event)=>{
        // setfoodlist(menuList.filter((item)=>{
            // return item.star===(event.target.length)
        // }))
        console.log((event.target));
    }
    let changeHandlerRangePrice=(event)=>{
        
        setfoodlist(menuList.filter((item)=>{
            
            return item.price<=event.target.value
        }))
    }
    let deleteHandler=()=>{
        setfoodlist(menuList);
    }
    return ( <div className="flex">
                <div className="flex w-4/5 justify-evenly mt-6 flex-wrap gap-8 ml-4">
                    {foodlist.map((item)=>{
                        return <LiMenu foodName={item["name"]} price={item["price"]} category={item["category"]} key={item["key"]} discripton={text} star={item["star"]}></LiMenu>
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