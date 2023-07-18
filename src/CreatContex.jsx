import {createContext,useContext,useState} from "react";

const creatContextt=createContext();
const showPupUpDetailFood=createContext();
const historyOrder=createContext();
const CreatContext = ({children}) => {
    const [cart,setCart]=useState([]);
<<<<<<< HEAD
    const [showPubhup,setShowPubhup]=useState(false);
    const [Orders,setOrders]=useState([]);
    return (
            <creatContextt.Provider value={{cart,setCart}}>
                <historyOrder.Provider value={{Orders,setOrders}} >
                    <showPupUpDetailFood.Provider value={{showPubhup,setShowPubhup}}>
                        {children}
                    </showPupUpDetailFood.Provider>
                </historyOrder.Provider>
            </creatContextt.Provider >
    );
=======
    return (
    <creatContextt.Provider value={{cart,setCart}}>
        {children}
    </creatContextt.Provider >);
>>>>>>> mobile
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
 
export {useContextState,useContextStateshowPupUpDetailFood,useContextStateHistoryOrder};
 
export default CreatContext;