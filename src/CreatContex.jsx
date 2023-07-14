import {createContext,useContext,useState} from "react";
const creatContextt=createContext();
const showPupUpDetailFood=createContext();
const CreatContext = ({children}) => {
    const [cart,setCart]=useState([]);
    const [showPubhup,setShowPubhup]=useState(false);
    return (
            <creatContextt.Provider value={{cart,setCart}}>
                <showPupUpDetailFood.Provider value={{showPubhup,setShowPubhup}}>
                    {children}
                </showPupUpDetailFood.Provider>
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
 
export {useContextState,useContextStateshowPupUpDetailFood};
 
export default CreatContext;