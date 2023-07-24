import img from "../../src/assets/img/pizza.webp"
import img1 from "../../src/assets/img/foodd.png"
import img2 from "../../src/assets/img/daisys_one_pot_pasta_1024x768.webp"


const Snap = () => {
    return (<div className=" md:px-32 px-10">
    <div className="overflow-x-auto snap-x w-full flex gap-8 md:mt-14 mt-20 over ">
        
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img1} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img2} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img1} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img2} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img1} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img2} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        <div className="snap-start w-32 h-32">
           <div className="w-32 h-32">
                 <img src={img1} className="w-32 h-32 rounded-xl" alt="" />
           </div>
        </div>
        
        
    </div>
    
    </div>
      );
}
 
export default Snap;