import {createContext,useContext,useState} from "react";
import userPerson from "./data/userData"
const mainContex=createContext();
const showPupUpDetailFood=createContext();
const historyOrder=createContext();
const userData=createContext();
const CreatContext = ({children}) => {
    // cart shop
    const [cart,setCart]=useState([]);
    // show and popup the ditail in menu when click on 
    const [showPubhup,setShowPubhup]=useState(false);
    // orders in history user
    const [Orders,setOrders]=useState([]);
    // is user login or not 
    const [user,setUser]=useState(userPerson)
    return (
            <mainContex.Provider value={{cart,setCart}}>
                <userData.Provider value={{user,setUser}}>
                    <historyOrder.Provider value={{Orders,setOrders}} >
                        <showPupUpDetailFood.Provider value={{showPubhup,setShowPubhup}}>
                            {children}
                        </showPupUpDetailFood.Provider>
                    </historyOrder.Provider>
                </userData.Provider>
            </mainContex.Provider >
    );
}
const useContextState = () => {
    return ( 
    useContext(mainContex)
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
 
export {useContextState
        ,useContextStateshowPupUpDetailFood
        ,useContextStateHistoryOrder
        ,useContextStateUser};
 
export default CreatContext;