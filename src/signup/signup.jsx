import pizza from "../assets/img/pizza.webp";
import Button from "../ui/Button";
const SignUp = () => {
    return (  <div className=" flex justify-center mt-16 h-screen mx-24 ">
     <div className="h-4/6 flex">
     <div className=" w-2/4 ">
        <img className="rounded-s-2xl" src={pizza}></img>
     </div>
     <div className="bg-white w-2/4 rounded-e-2xl ">
        <div className="flex justify-center items-center mt-6">
            <Button  textColor={"text-white"}>Sign Up</Button>
        </div>
        <div className="flex flex-col justify-center items-center">
            <input className="border pr-64 py-2 rounded-xl mx-4 mt-8" type="text" placeholder="username" />
            <input className="border pr-64 py-2 rounded-xl mx-4 mt-8" type="text" placeholder="password" />
        </div>
      {/* <div className="border h-20 w-20 rounded-full bg-red-500 absolute top-28 right-20 z-10"></div> */}
     </div>
     </div>
    </div>);
}
 
export default SignUp;