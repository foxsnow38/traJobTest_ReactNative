import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';
import { DataTable } from 'react-native-paper'; // https://callstack.github.io/react-native-paper/data-table.html

import SvgUri from 'react-native-svg-uri';


const originalWidth = 500;
const originalHeight = 500;
const aspectRatio = originalWidth / originalHeight;


function Home() {




  return (
<>


    <DataTable>
       
       
   
        <DataTable.Row style={{width:`100%`}}>
        <DataTable.Cell style={{width:`100%`,flex:1.5}}>
          <SvgUri
      width="20"
      height="20"
      source={{uri:`../assets/bitcoin-icon.svg`}}
    />
          </DataTable.Cell>
        
          <DataTable.Cell style={{flex:5.5}}>BTC/USDT</DataTable.Cell>
        
          <DataTable.Cell style={{flex:3,justifyContent:"flex-start"}}>
            
          <Button
          
  onPress={()=>{}}
  title="BTC/USDT"
  color="#D85107"
  accessibilityLabel="Learn more about this purple button"
/>

 </DataTable.Cell>
        </DataTable.Row>

      

      </DataTable>
</>
)
}

export default Home