import AcountChild from "./acountChild";
import Button from "../ui/Button";
import { useContextStateUser } from "../CreatContex";
import { useState } from "react";
const Acounts = () => {
    let {user,setUser}=useContextStateUser();
    let [email,setEmail]=useState();
    let [phone,setPhone]=useState();
    let [name,setName]=useState();
    let [id,setId]=useState();
    let clickHandler=()=>{
       setUser({email,phone,name,id})
    }
    return ( <div className="flex flex-col items-end rounded-xl p-4 gap-2 bg-white mt-8 md:w-1/3 w-96 dark:bg-gray-600">
    <p className="w-full text-right mb-2 text-xl font-bold">حساب کاربری</p>
     <AcountChild placeholer={user.email} stateHandler={setEmail}>آدرس ایمیل</AcountChild>
     <AcountChild placeholer={user.phone} stateHandler={setPhone} >تلفن همراه</AcountChild>
     <AcountChild placeholer={user.name} stateHandler={setName}>نام ونام خانوادگی</AcountChild>
     <button onClick={clickHandler} className="bg-[#D41B27] shadow-md shadow-red-600 text-white w-fit px-8 py-1 rounded-xl mt-2">ویرایش</button>
     <AcountChild placeholer={user.id} stateHandler={setId}>کدملی</AcountChild>
     <button className="bg-[#D41B27] shadow-md shadow-red-600 text-white w-fit px-8 py-1 rounded-xl mt-2">ویرایش</button>
    </div>);
}
 
export default Acounts;