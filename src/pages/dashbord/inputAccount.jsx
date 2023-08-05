
const InputAccount = ({children,placeholer,stateHandler}) => {
   
    let changeHandler=(e)=>{
        stateHandler(e.target.value);
    }
    return ( <>
    <div className="flex flex-col items-end">
    <label className="" htmlFor="">{children}</label>
    <input onChange={changeHandler} placeholder={placeholer} className="border md:pr-48 pr-40 rounded-sm mt-2 p-1"></input>
    </div>
    </> );
}
 
export default InputAccount;