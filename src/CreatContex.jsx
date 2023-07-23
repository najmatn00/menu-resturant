import {createContext,useContext,useState} from "react";
import UserP from "./data/userData"
const creatContextt=createContext();
const showPupUpDetailFood=createContext();
const historyOrder=createContext();
const userData=createContext();
const CreatContext = ({children}) => {
    const [cart,setCart]=useState([]);
    const [showPubhup,setShowPubhup]=useState(false);
    const [Orders,setOrders]=useState([]);
    const [user,setUser]=useState(UserP)
    return (
            <creatContextt.Provider value={{cart,setCart}}>
                <userData.Provider value={{user,setUser}}>
                    <historyOrder.Provider value={{Orders,setOrders}} >
                        <showPupUpDetailFood.Provider value={{showPubhup,setShowPubhup}}>
                            {children}
                        </showPupUpDetailFood.Provider>
                    </historyOrder.Provider>
                </userData.Provider>
            </creatContextt.Provider >
    );
}
const useContextState = () => {
    return ( 
    useContext(creatContextt)
     );
}
const useContextStateshowPupUpDetailFood = () => {
    return ( 
    useContext(showPupUpDetailFood)
     );
}
 
const useContextStateHistoryOrder = () => {
    return ( 
    useContext(historyOrder)
     );
}
const useContextStateUser = () => {
    return ( 
    useContext(userData)
     );
}
 
export {useContextState,useContextStateshowPupUpDetailFood,useContextStateHistoryOrder,useContextStateUser};
 
export default CreatContext;