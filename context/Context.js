import { createContext, useContext, useEffect, useState } from "react";
import filter from "./websocket";







 const KrakenContext = createContext()

const KrakenContextProvider =({children})=>{
const [krakenData,setKrakenData] = useState(filter())


useEffect(()=>{

setTimeout(() => {
  
  setKrakenData(filter()) // set intervali 1000
}, 1000);


},[krakenData])


let value ={
krakenData

}


    return(<KrakenContext.Provider value={value}>{children}</KrakenContext.Provider>)

}

const useKrakenContext = ()=> useContext(KrakenContext)

export {useKrakenContext,KrakenContext,KrakenContextProvider}