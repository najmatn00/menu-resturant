import { useRef, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import { Rating } from '@mui/material';

const StarAcardionItem = ({clickHandlerStar}) => {
    
    return ( 
        <ul>
                        <li  className="flex items-center" onClick={clickHandlerStar}>
                            <Rating  name="read-only" value={1} readOnly />
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center select-none">
                            <Rating name="read-only" value={2} readOnly />
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center ">
                            <Rating name="read-only" value={3} readOnly />
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center">
                            <Rating name="read-only" value={4} readOnly />
                        </li>
                        <li onClick={clickHandlerStar} className="flex items-center">
                            <Rating name="read-only" value={5} readOnly />
                        </li>
                </ul>
     );
}
 
export default StarAcardionItem;