import { useState } from "react";
import LiMenu from "../menu/liMenu";
import { AiOutlineStar } from 'react-icons/ai';
import Accordion from "./accordion";

const CardMenu = () => {
    let text=" Lorem ipsum dolor sit amet."
    let menuList=[{
        "name":"italian pasta",
        "price":"23$",
        "id":"1",
        "category":"pasta",
        "star":"5"
    },
    {
        "name":"hamburger",
        "price":"12$",
        "id":"2",
        "category":"burger",
        "star":"4"
    },
    {
        "name":"cheesburger",
        "price":"18$",
        "id":"3",
        "category":"burger",
        "star":"4"
    },
    {
        "name":"Donner",
        "price":"27$",
        "id":"4",
        "category":"burger",
        "star":"5"
    },
    {
        "name":"margarita",
        "price":"23$",
        "id":"5",
        "category":"pizza",
        "star":"3"
    },
    {
        "name":"calzone",
        "price":"28$",
        "id":"6",
        "category":"pizza",
        "star":"2"
    },
    {
        "name":"vegetable pasta",
        "price":"12$",
        "id":"7",
        "category":"pasta",
        "star":"5"
    },
    {
        "name":"lopez spcial",
        "price":"17$",
        "id":"8",
        "category":"pasta",
        "star":"4"
    }
]
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
        console.log((event));
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
            <p className="cursor-pointer" onClick={deletHandler}>delet filters</p>
       </div>
       <Accordion  title={"category"}>
       <ul>
            <li className="cursor-pointer" onClick={clickHandlerCategory}>pasta</li>
            <li className="cursor-pointer" onClick={clickHandlerCategory}>burger</li>
            <li className="cursor-pointer" onClick={clickHandlerCategory}>pizza</li>
       </ul>
       </Accordion>
       <Accordion title={"price"}/>
       <Accordion title={"star"}> 
       <ul>
       <li  onClick={clickHandlerStar} className="cursor-pointer flex items-center ">
        <AiOutlineStar/>
       </li>
       <li  onClick={clickHandlerStar} className="cursor-pointer flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       <li  onClick={clickHandlerStar} className="cursor-pointer flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       <li  onClick={clickHandlerStar} className="cursor-pointer flex items-center">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
       </li>
       <li  onClick={clickHandlerStar} className="cursor-pointer flex items-center">
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