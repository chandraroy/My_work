import React from 'react';

import { NativeBaseProvider, Text, Box ,Center ,Heading,Image,AspectRatio,VStack, HStack, Pressable,Select,CheckIcon} from 'native-base';
import { Dimensions} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { defaultConfig } from 'native-base/lib/typescript/core/NativeBaseContext';
import LoginScreen from "../Screens/LoginScreen"
import HomeScreen from "../Screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from '../Screens/MapScreen';
import { alignItems, color, justifyContent, textColor } from 'styled-system';

const Stack = createNativeStackNavigator();

 const ApplicationNavigator =()=> {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen"  component={HomeScreen} options={{ title: 'RestaurantList', headerStyle: {
              backgroundColor: '#4bc46b', 
           } ,
           headerTitleStyle:{
            color:"white",
            
            
           },
           headerTitleAlign:"center"
           
        }}/>
       <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: 'MapScreen', headerStyle: {
              backgroundColor: '#4bc46b',
           } ,
           headerTitleStyle:{
            color:"white",
           },
           headerTitleAlign:"center"
           
          }}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator


