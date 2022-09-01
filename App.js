import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

//WebSocket
import {KrakenContextProvider, useKrakenContext} from "./context/Context"

//Pages
import Home from './pages/Home';
import Trade from './pages/Trade';
import TradeNagivate from './navigate/TradeNagivate';



//Router
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

export default function App() {


  return (

    <KrakenContextProvider>
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="TradeNagivate" component={TradeNagivate} options={{headerShown:false}} 
        options={{headerShown:false}}
        />

        

      </Stack.Navigator>
      <StatusBar style="autaso" />

    
  </NavigationContainer>

  </KrakenContextProvider>
 
    
   
  );
}