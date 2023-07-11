import imgfood from '../assets/img/foodd.png';


const Order = ({name,discripton,star,price,count}) => {
    
    return ( 
            <div>
                <li className="bg-white mx-12 mt-6  border rounded-xl list-none  p-6 flex items-center gap-2" >
                    <div className="">
                        <img className="w-24 h-24 rounded-full" src={imgfood} alt="" srcset="" />
                    </div>
                    <div className="">
                        <p>{name}</p> 
                        <p>{discripton}</p>
                        <p>star : {star}</p>
                        </div>
                        <p className="ml-28">price : {price} &</p>
                        <div className="flex items-center ">
                        <p className="ml-20">quantity :{count} </p>
                        <p className="border w-6 h-6 text-center">{}</p>
                    </div>
                </li>
            </div>
     );
}
 
export default Order;