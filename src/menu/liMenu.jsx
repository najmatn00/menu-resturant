import pasta from "../assets/img/foodd.png";
import { AiOutlineStar } from 'react-icons/ai';
const LiMenu = ({foodName,discripton,star,price,category,key}) => {
    return ( <>
    <ul>
        <li className="border p-4  bg-[#F7F7F7] rounded-xl">
            <img className=" w-52 h-52" src={pasta} />
            <h2 className="foodname">{foodName}</h2>
            <p className="dis">{discripton}</p>
            <div className="flex items-center">
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <p className="ml-2 star">{star}</p>
            </div>
            <div className="flex items-center ">
                <p className="price">{price}</p>
            </div>
        </li>
    </ul>
    </> );
}
 
export default LiMenu;