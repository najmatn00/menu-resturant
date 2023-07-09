
import StarAcardionItem from "../layout/starAcardionItem";
import Accordion from "../ui/accordion";


const FiltterProdact = ({
        deleteHandler,
        clickHandlerCategory,
        changeHandlerRangePrice,
        clickHandlerStar}) => {

                
    return ( 
        <>
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
                    <input onChange={changeHandlerRangePrice} className="bg-red-200 w-full" type="range" min="0" max="40" step={"5"} list="values"/>
                    <datalist className="w-full flex items-center justify-between text-xs" id="values">
                        <option className=" inline-block" value="0" label="0"></option>
                        <option className=" inline-block" value="5" label="5"></option>
                        <option className=" inline-block" value="10" label="10"></option>
                        <option className=" inline-block" value="15" label="15"></option>
                        <option className=" inline-block" value="20" label="20"></option>
                        <option className=" inline-block" value="25" label="25"></option>
                        <option className=" inline-block" value="30" label="30"></option>
                        <option className=" inline-block" value="35" label="35"></option> 
                        <option className=" inline-block" value="40" label="40"></option> 
                    </datalist>
                </Accordion>
                <Accordion title={"star"}> 
                            <StarAcardionItem clickHandlerStar={clickHandlerStar}/>
                </Accordion>
       </div>
    
                </div>
        </>
     );
}
 
export default FiltterProdact;