import Button from "../ui/Button";
import img from "../assets/img/foodd.png";
import { useNavigate } from "react-router-dom";
import Snap from "./snap";
const MainBase = () => {
    let navigate=useNavigate();
    let clickHandler=()=>{
        navigate("menupage")
    }
    return ( <>
    <div className="flex  justify-evenly mt-4">
    <p className="Robt_bold text-4xl  md:text-6xl mt-6 ml-4 md:ml-0">it s not just <br/> Food, It s an<br/> Experience.</p>
    <img className="rounded-full w-44 h-44 md:block md:w-80 md:h-80 mt-32 md:mt-2 " src={img}  />
    </div>
    <div className="pl-12 md:pl-64  flex gap-6 mt-36 w-full absolute top-64 md:mt-32  z-10 ">
        <Button  textColor={" text-white"} click={clickHandler}>View Menu</Button>
        <Button classCss=" border p-2 px-4 rounded-3xl bg-[#D41B27]  text-sm " color={"bg-white"} textColor={" text-black"}>Book A Table </Button>
    </div>
    <div className="flex pt-36  justify-evenly items-center md:pt-0 md:flex-row flex-col">
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
        
    </div>
    <Snap></Snap>
    </>);

}
 
export default MainBase;