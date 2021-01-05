import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
//Importing the screens

import HomeScreen from '../screens/home';
import IncidentManage from '../screens/incidentmanage';
import MLManage from '../screens/MLmanage';
import ClimateChange from '../screens/climatechange';
import PlantATree from '../screens/plantatreeinitiative';


const Tab = createBottomTabNavigator();

export default function MainTabNavigator(){

    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions = {{
                    activeTintColor : 'blue',
                    style:{
                        backgroundColor: 'white'
                    }
                }}>

                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: props =><Entypo name="home" size={24} color="black" />
                }}/>
                <Tab.Screen name="IncidentReport" component={IncidentManage} options={{
                    tabBarIcon: props =><AntDesign name="form" size={24} color="black" />
                }} />
                <Tab.Screen name="ML" component={MLManage} options={{
                    tabBarIcon: props =><MaterialIcons name="online-prediction" size={24} color="black" />
                }}/>
                <Tab.Screen name="ClimateChange" component={ClimateChange} options={{
                    tabBarIcon: props =><FontAwesome name="envira" size={24} color="black" />
                }}/>
                <Tab.Screen name="PlantATree" component={PlantATree} options={{
                    tabBarIcon: props =><Foundation name="trees" size={24} color="black" />
                }}/>

             </Tab.Navigator>
        </NavigationContainer>
        
        )


}
