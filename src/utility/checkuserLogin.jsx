import { Navigate } from "react-router-dom";

import { useContextStateUser } from "../CreatContex";

const CheckUserLogin = ({children}) => {
    return(
        <div className="">
            {IsLogin()?
                children
            :
            (<Navigate to='/signIn'/>)
            }
        </div>
    )

}
let IsLogin=()=>{
    let {user}=useContextStateUser();
    return user.name==="amin";
}
export {IsLogin};
export default CheckUserLogin;