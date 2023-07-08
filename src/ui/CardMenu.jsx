import { useState } from "react";
import LiMenu from "../menu/liMenu";

import Accordion from "./accordion";
import { menuList } from "../data/menu-lis";
import StarAcardionItem from "../layout/starAcardionItem";

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
        console.log(event.target.value);
    }
    let deletHandler=()=>{
        setfoodlist(menuList)
    }
    return ( <div className="flex">
                <div className="flex w-4/5 justify-evenly mt-6 flex-wrap gap-8 ml-4">
                    {foodlist.map((item)=>{
                        return <LiMenu foodName={item["name"]} price={item["price"]} category={item["category"]} key={item["key"]} discripton={text} star={item["star"]}></LiMenu>
                    })}
                
                </div>

    <div className=" w-1/6 ml-2 fixed right-5 border-2 border-[#E0E0E6] mt-6 rounded-xl bg-[#F7F7F7] top-24 p-4">
       <div className="flex justify-around flex-col">
            <div className="flex justify-between">
            <h2>filters</h2>
            <p>delet filters</p>
       </div>
       <Accordion title={"category"}>
       <ul>
            <li onClick={clickHandlerCategory}>pasta</li>
            <li onClick={clickHandlerCategory}>burger</li>
            <li onClick={clickHandlerCategory}>pizza</li>
       </ul>
       </Accordion>
       <Accordion title={"price"}/>
       <Accordion title={"star"}> 
       <ul>
       <li onClick={clickHandlerStar} className="flex items-center">
        <AiOutlineStar/>
       </li>
       <li onClick={clickHandlerStar} className="flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       <li onClick={clickHandlerStar} className="flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       <li onClick={clickHandlerStar} className="flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       <li onClick={clickHandlerStar} className="flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       </ul>
       </Accordion>
       </div>
    
    </div>
    </div> );
}
 
export default CardMenu;