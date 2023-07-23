import img from "../../src/assets/img/pizza.webp"
const Snap = () => {
    return (<>
    <div className=" snap-x overflow-x-auto w-full flex gap-4 ">
        <div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div>
        <div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div><div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div><div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div><div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div><div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div><div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div><div className="w-64 h-64 snap-start border-8">
            <img src={img} alt="" />
        </div>
        
       
    </div>
    
    </>
      );
}
 
export default Snap;