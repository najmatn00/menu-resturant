import Button from "../ui/Button";
import Card from "../ui/Cardmain";
import img from "../assets/img/foodd.png";

import { Link, useNavigate } from "react-router-dom";
const MainBase = () => {
    let navigate=useNavigate();
    let clickHandler=()=>{
        navigate("menupage")
    }
    return ( <>
    <div className="flex  justify-evenly mt-4">
    <p className="Robt_bold text-6xl mt-6 ">it s not just <br/> Food, It s an<br/> Experience.</p>
    <img className="rounded-full w-80 h-80 " src={img}  />
    </div>
    <div className="ml-64 flex gap-6 absolute top-64 mt-12 z-10">
        <Button textColor={" text-white"} click={clickHandler}>View Menu</Button>
        <Button color={"bg-white"} textColor={" text-black"}>Book A Table </Button>
    </div>
    <div className="flex justify-evenly items-center">
    {/* <Card/> */}
   
    </div>
   
    </>);

}
 
export default MainBase;