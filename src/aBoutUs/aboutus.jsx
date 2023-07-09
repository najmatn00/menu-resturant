import hambur from "../assets/img/daisys_one_pot_pasta_1024x768.webp"
import pasta from "../assets/img/effects-of-eating-junk-food.jpg.jpg"
const ABoutUS = () => {
    return (  <>
    <img className=" w-1/3 rotate-6 float-right mx-4 rounded-xl" src={hambur}></img>
    <img className=" w-1/3  -rotate-6 mt-64 rounded-xl" src={pasta}></img>
    <div className="">
    <div className=" absolute top-32 text-sm left-1/3 ml-24"> the restaurant started working in</div>
    <h1 className="Robt-bold text-9xl font-bold absolute top-40 left-1/3 ml-12">1971</h1>
    </div>
    
    </>);
}
 
export default ABoutUS;