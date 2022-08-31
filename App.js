import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TradeBuy from './components/TradeBuy';
import {KrakenContextProvider, useKrakenContext} from "./context/Context"
import Home from './pages/Home';


export default function App() {


  return (

 
    <KrakenContextProvider>
    <View style={styles.container}>
  
       <Home></Home>

      <StatusBar style="autaso" />
     
  </View>
  </KrakenContextProvider>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    width:`100%`,
    height:`100%`
    
  },
});
