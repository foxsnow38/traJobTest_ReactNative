
import React from 'react'
import { Button,View,Text} from 'react-native';

//Pages
import Trade from '../pages/Trade';

///Router
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createNativeStackNavigator();


export default function TradeNagivate({navigation,route}) {
  // https://www.youtube.com/watch?v=nDDBea90W_I
  const {unit,position} = route.params
  // console.log(`Navigate: unit: ${unit} , position: ${position}`)


// Burada initial olarak datayi almam gerekiyordu aksi takdirde Parametereler duzgun calismiyor.



// Burada benden istenen al sat icin tab nagivator.
 if(unit) return (
<>
   <Tab.Navigator initialRouteName={`${position}`} >
    <Tab.Screen name="buy" component={Trade }
    initialParams={{
  unit:unit,
  position:position
    }}  
     options={{
      headerTitle:``,
      headerLeft: () => (
      <View style={{marginLeft:10,width:120}}>
       <Button
     
          title={`${unit}-${position.toUpperCase()}`}
          color="#668ae8"
        />
        
  

      </View>
      ),
      headerRight: () => (
        <View style={{marginRight:20,width:200,flexDirection:"row",justifyContent:"space-around"}}>
<View style={{width:75}}>

<Button
         onPress={() =>navigation.navigate('TradeNagivate',{
          screen:"buy",
          unit:unit,
          position:`buy`
        })}
          title="Buy"
          color="#1149D8"
        />

</View>
<View style={{width:75}}>
<Button
             onPress={() =>navigation.navigate('TradeNagivate',{
              screen:"sell",
              unit:unit,
              position:`sell`
            })}
            title="Sell"
            color="#1149D8"
          />
</View>
         
  
        </View>
        ),
           
        }}/>
    <Tab.Screen name="sell" component={Trade} 
    initialParams={{
      unit:unit,
      position:position
        }}  
        options={{
          headerTitle:``,
          headerLeft: () => (
          <View style={{marginLeft:10,width:120}}>
           <Button
         
              title={`${unit}-${position.toUpperCase()}`}
              color="#668ae8"
            />
            
      
    
          </View>
          ),
          headerRight: () => (
            <View style={{marginRight:20,width:200,flexDirection:"row",justifyContent:"space-around"}}>
    <View style={{width:75}}>
    
    <Button
             onPress={() =>navigation.navigate('TradeNagivate',{
              screen:"buy",
              unit:unit,
              position:`buy`
            })}
              title="Buy"
              color="#1149D8"
            />
    
    </View>
    <View style={{width:75}}>
    <Button
                 onPress={() =>navigation.navigate('TradeNagivate',{
                  screen:"sell",
                  unit:unit,
                  position:`sell`
                })}
                title="Sell"
                color="#1149D8"
              />
    </View>
             
      
            </View>
            ),
               
            }}/>
    </Tab.Navigator> 
    
    </>
  
  )
}
