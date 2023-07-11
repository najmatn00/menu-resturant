import {createContext,useContext,useState} from "react";
const creatContextt=createContext();
const CreatContext = ({children}) => {
    const [cart,setCart]=useState([]);
    return (
    <creatContextt.Provider value={{cart,setCart}}>
        {children}
    </creatContextt.Provider >);
}
const useContextState = () => {
    return ( 
    useContext(creatContextt)
     );
}
 
export {useContextState};
 
export default CreatContext;