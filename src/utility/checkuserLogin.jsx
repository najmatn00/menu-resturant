import { Navigate, useNavigate } from "react-router-dom";

const CheckUserLogin = ({children}) => {

   
    let username ="l"
    console.log(children);

    return(
        <div className="">
            {username==="amin"?
                children
            :
            (<Navigate to='/signUp'/>)
            }
        </div>
    )

}
 
export default CheckUserLogin;