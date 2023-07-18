import Button from "../ui/Button";
import img from "../assets/img/foodd.png";

import { useNavigate } from "react-router-dom";
const MainBase = () => {
    let navigate=useNavigate();
    let clickHandler=()=>{
        navigate("menupage")
    }
    return ( <>
    <div className="flex  justify-evenly mt-4">
    <p className="Robt_bold text-6xl mt-6 ">it s not just <br/> Food, It s an<br/> Experience.</p>
    <img className="rounded-full hidden md:block md:w-80 md:h-80 " src={img}  />
    </div>
    <div className="ml-64 flex gap-6 justify-center w-full absolute top-64 md:mt-12 mt-32 z-10">
        <Button textColor={" text-white"} click={clickHandler}>View Menu</Button>
        <Button classCss=" border p-2 px-4 rounded-3xl bg-[#D41B27]  text-sm " color={"bg-white"} textColor={" text-black"}>Book A Table </Button>
    </div>
    <div className="flex pt-36  justify-evenly items-center md:pt-0 md:flex-row flex-col">
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
    </div>
   
    </>);

}
 
export default MainBase;