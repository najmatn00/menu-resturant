
import Button from "../../ui/Button";
import { useContextStateUser } from "../../CreatContex";
import { useState } from "react";
import InputAccount from "./inputAccount";
const Acounts = () => {
    // to show info user in placeholder
    let {user} =useContextStateUser();
    // state for hodling data to adit user information
    let [email,setEmail]=useState();
    let [phone,setPhone]=useState();
    let [name,setName]=useState();
    let [id,setId]=useState();
    // submit date to back
    let clickHandler=()=>{
    
    }
    return ( <div className="flex flex-col items-end rounded-xl p-4 gap-2 bg-white mt-8 md:w-1/3 w-96 dark:bg-gray-600">
    <p className="w-full text-right mb-2 text-xl font-bold">حساب کاربری</p>
     <InputAccount placeholer={user.email} stateHandler={setEmail}>آدرس ایمیل</InputAccount>
     <InputAccount placeholer={user.phone} stateHandler={setPhone} >تلفن همراه</InputAccount>
     <InputAccount placeholer={user.name} stateHandler={setName}>نام ونام خانوادگی</InputAccount>
     <button onClick={clickHandler} className="bg-[#D41B27] shadow-md shadow-red-600 text-white w-fit px-8 py-1 rounded-xl mt-2">ویرایش</button>
     <InputAccount placeholer={user.id} stateHandler={setId}>کدملی</InputAccount>
     <button className="bg-[#D41B27] shadow-md shadow-red-600 text-white w-fit px-8 py-1 rounded-xl mt-2">ویرایش</button>
    </div>);
}
 
export default Acounts;