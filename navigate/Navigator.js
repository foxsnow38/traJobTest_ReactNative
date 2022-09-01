import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import Home from "../pages/Home"
import Trade from "../pages/Trade"


const screens ={
Home:{
    screen:Home
},
Trade:{
    screen:Trade
}

}

const HomeStack  = createStackNavigator(screens)



export default createAppContainer(HomeStack)
/// https://www.youtube.com/watch?v=cS4PgI3zBzY