import Button from "../ui/Button";
import Card from "../ui/Card";
import img from "../assets/img/foodd.png";

const MainBase = () => {
    return ( <>
    <div className="flex  justify-evenly mt-4">
    <p className="Robt_bold text-6xl mt-6 ">it s not just <br/> Food, It s an<br/> Experience.</p>
    <img className="rounded-full w-80 h-80" src={img}  />
    </div>
    <div className="ml-64 flex gap-6 absolute top-64 mt-12">
        <Button textColor={" text-white"}>View Menu</Button>
        <Button color={"bg-white"} textColor={" text-black"}>Book A Table </Button>
    </div>
    <div className="flex justify-evenly items-center">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
   
    </>);

}
 
export default MainBase;