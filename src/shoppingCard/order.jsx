import imgfood from '../assets/img/foodd.png';


const Order = ({name,discripton,star,price,count}) => {
    
    return ( 
            <>
                <li className="bg-white dark:bg-gray-600 dark:shadow-md dark:shadow-black md:mx-12 mt-6 p-4 md:p-6  border rounded-xl list-none mx-4 flex  items-center md:gap-2 " >
                    <div className="">
                        <img className="w-24 h-24 rounded-full" src={imgfood} alt="" srcset="" />
                    </div>
                   <div className="flex pl-8 md:-pl-0  justify-center flex-col md:flex-row">
                        <div className="">
                                <p>{name}</p> 
                                <p>{discripton}</p>
                                <p>star : {star}</p>
                        </div>
                                <p className="md:ml-28">price : {price} &</p>
                        <div className="flex items-center ">
                                <p className="md:ml-20 ">quantity :</p>
                                <p className="border w-6 h-6 text-center">{count} </p>
                        </div>
                   </div>
                </li>
            </>
     );
}
 
export default Order;