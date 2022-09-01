import { createContext, useContext, useEffect, useState } from "react";
import filter from "./websocket";







 const KrakenContext = createContext()

 // Biraz daha gelismis yapmak istedigin icin  Context Yaptim Ama datayi yavaslatiyor,
const KrakenContextProvider =({children})=>{
const [krakenData,setKrakenData] = useState(filter())


useEffect(()=>{

setTimeout(() => {
  
  setKrakenData(filter()) 
}, 1000);



},[])


let value ={
krakenData

}


    return(<KrakenContext.Provider value={value}>{children}</KrakenContext.Provider>)

}

const useKrakenContext = ()=> useContext(KrakenContext)

export {useKrakenContext,KrakenContext,KrakenContextProvider}