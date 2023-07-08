import { AiOutlineStar } from 'react-icons/ai';


const StarAcardionItem = ({clickHandlerStar}) => {
    return ( 
        <ul>
                        <li  className="flex items-center z-50" onClick={clickHandlerStar}>
                            <AiOutlineStar/>
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center">
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center ">
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center">
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center">
                            <AiOutlineStar/>
                        
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                        </li>
                </ul>
     );
}
 
export default StarAcardionItem;