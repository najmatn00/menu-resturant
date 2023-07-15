import { Navigate, useNavigate } from "react-router-dom";

const CheckUserLogin = ({children}) => {

   
    let username ="amin"
    console.log(children);

    return(
        <div className="">
            {username==="amin"?
                children
            :
            (<Navigate to='/signIn'/>)
            }
        </div>
    )

}
 
export default CheckUserLogin;