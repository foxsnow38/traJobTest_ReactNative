import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native';

//Libs
import { DataTable } from 'react-native-paper';
import { useKrakenContext} from '../context/Context';
import GifImage from '@lowkey/react-native-gif';

// Router
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Tab = createNativeStackNavigator();


function Trade({route,navigation,screen}) {

  const {unit,position} = route.params
  // console.log(`Trade: unit: ${unit} , position: ${position} screen: ${screen}`)


  let {krakenData} = useKrakenContext()

  const [stateUnit,setStateUnit] = useState(null)
  const [steatePosition,setStatePosition] = useState(null)
    
  useEffect(()=>setStateUnit(krakenData[unit],[])) // sinirsiz loopa girmesini tetikliyorum.
  useEffect(() => {

    const interval = setInterval(() => {
      setStateUnit(krakenData[unit])
      setStatePosition(stateUnit[position])
 
    }, 1000);

 
    return ()=> clearInterval(interval) // sinirsiz loopu didunmount func la temizliyorum yoksa stackleniyor.
  }, [stateUnit])
  
  
  
  
   if (steatePosition !=null && steatePosition!= undefined && unit != undefined) return (
  <>


  
      <DataTable>
          <DataTable.Header>
            <DataTable.Title>Price</DataTable.Title>
            <DataTable.Title>Amount</DataTable.Title>
            <DataTable.Title >Total</DataTable.Title>
  
          </DataTable.Header>
  
        {steatePosition.map((item,index) =>( //Filtrelenen datayi mapliyorum
  
  <DataTable.Row key={index}>
  <DataTable.Cell>{parseFloat(item[0]).toFixed(4)}</DataTable.Cell>
  <DataTable.Cell>{parseFloat(item[1])}</DataTable.Cell>
  <DataTable.Cell>{`${unit.includes(`EUR`)?`€`:`$` } ${parseFloat(item[2]).toFixed(4)}`}</DataTable.Cell>
  
  </DataTable.Row>
        ))} 
        </DataTable>
  </>
  )
  else return(<>

<GifImage
  source={{
    uri:
      'https://cdn.dribbble.com/users/1493457/screenshots/6450562/__-1_3.gif',
  }}
  style={{
    width: 400,
    height: 400,
  }}
  resizeMode={'cover'}
/>
</>
)





}

export default Trade