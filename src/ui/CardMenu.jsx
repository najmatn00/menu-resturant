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
        // console.log(event.target.value);
        setfoodlist(menuList.filter((item)=>{
            console.log(item.price<=event.target.value);
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

                <div className=" w-1/6 ml-2 fixed right-5 border-2 border-[#E0E0E6] mt-6 rounded-xl bg-[#F7F7F7] top-24 p-4">
                <div className="flex justify-around flex-col">
                        <div className="flex justify-between">
                        <h2>filters</h2>
                        <p className="cursor-pointer" onClick={deleteHandler}>delet filters</p>
                </div>
                <Accordion title={"category"}>
                        <ul>
                                <li className="cursor-pointer" onClick={clickHandlerCategory}>pasta</li>
                                <li className="cursor-pointer" onClick={clickHandlerCategory}>burger</li>
                                <li className="cursor-pointer" onClick={clickHandlerCategory}>pizza</li>
                        </ul>
                </Accordion>
                <Accordion childrenClass={"pt-2"} title={"price"}>
                    <input onChange={changeHandlerRangePrice} className="bg-red-200" type="range" min="0" max="40" step={"5"} list="values"/>
                    <datalist className="border-4" id="values">
                        <option value="0" label="0"></option>
                        <option value="5" label="5"></option>
                        <option value="10" label="10"></option>
                        <option value="15" label="15"></option>
                        <option value="20" label="20"></option>
                        <option value="25" label="25"></option>
                        <option value="30" label="30"></option>
                        <option value="35" label="35"></option> 
                    </datalist>
                </Accordion>
                <Accordion title={"star"}> 
                            <StarAcardionItem clickHandlerStar={clickHandlerStar}/>
                </Accordion>
       </div>
    
    </div>
    </div> );
}
 
export default CardMenu;