import pizza from "../assets/img/pizza2.png"
import pasta from "../assets/img/pasta.png"
const ABoutUS = () => {
    return (  <div className="">
    <img className=" w-1/4 rotate-6 float-right mx-6 rounded-xl" src={pizza}></img>
    <img className=" w-1/3  -rotate-6 md:mt-64 mt-80 rounded-xl" src={pasta}></img>
    <div className="">
    <div className=" absolute ml:top-44 top-1/4  ml-4 md:text-sm md:left-1/3 md:ml-24"> the restaurant started working in</div>
    <h1 className="Robt-bold md:text-9xl text-6xl font-bold absolute top-64 ml:top-52 left-1/3 ml-12">1971</h1>
    </div>
    
    </div>);
}
 
export default ABoutUS;