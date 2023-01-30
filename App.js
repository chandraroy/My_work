import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box ,Center ,Heading,Image,AspectRatio,VStack, HStack, Pressable,Select,CheckIcon} from 'native-base';
import { Dimensions} from "react-native";
import ApplicationNavigator from './Navigators/Application';


function App() {
  return (
    <NativeBaseProvider
    
  >
    <ApplicationNavigator />
  </NativeBaseProvider>
  );
}


export default App;