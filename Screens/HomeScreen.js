import React, { useEffect, useState } from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider ,Image, Pressable,Spinner} from "native-base";
import ShadowBox from "./components/Shadow";

const HomeScreen = (props) => {

  const [isLoadMore, setLoadMore] = React.useState(false);
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Barbeque Nation",
    timeStamp: require("../components/Images/shop-pin.png"),
    avatarUrl: "https://pixabay.com/photos/spaghetti-tomatoes-basil-1932466/"
    

  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Bikarnervala-Indian Restaurant",
    timeStamp: require("../components/Images/shop-pin.png"),
    
     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "650=The Global Kitchen",
    timeStamp: require("../components/Images/shop-pin.png"),
    
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Rajwadu",
    timeStamp: require("../components/Images/shop-pin.png"),
   
     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Tinello",
    timeStamp: require("../components/Images/shop-pin.png"),
    
     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Hyderabadi Hut",
    timeStamp: require("../components/Images/shop-pin.png"),
    
     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Bistro 61 Multicuisine",
    timeStamp: require("../components/Images/shop-pin.png"),
    
     avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];

  const [myUserData,setMyUserData]  = React.useState([])
  const [isLoaded,setIsLoaded] =React.useState(true)

  const handleLoadMore = async () => {
    
      setLoadMore(true);
    
  };

  const footerComponent = () => {
    return (
      <HStack w={'full'} h={'44'} alignItems="center" justifyContent={'center'}>
        {isLoadMore ? <Spinner size="sm" colorScheme={'black'} /> : null}
      </HStack>
    );
  };



  const getUserData =async () =>{
    try {
      const response = await fetch("http://205.134.254.135/~mobile/interview/public/api/restaurants_list")
      const Data = await response.json()
      const MyData = Data?.data

      setMyUserData(MyData)
      setIsLoaded(false)
      console.log("test@@@",MyData)
    }catch(error){
      console.log(error)
    }

  }
useEffect(()=>{
  getUserData()
},[myUserData])

  return <Box px="1">
      
      <FlatList data={myUserData} 
       onEndReached={handleLoadMore}
       onEndReachedThreshold={0.8}
       ListFooterComponent={footerComponent}
      
      renderItem={({
      item ,index
    }) => <ShadowBox h={"85"}>

            <HStack space={4} >
            <Center py={'3'} ml={"3"}>
              <Image size="58px" borderRadius={5} source={require("../components/Images/img.png")} />
              </Center>
              <VStack>
              <Center py={'3'}>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item?.title}
                </Text>
            </Center>
              </VStack>
              <Spacer />
              <Center py={'3'}>
                <Pressable onPress={()=> props.navigation.navigate("MapScreen")}>
            <Box w={"10"} h={"10"} bg={"#4bc46b"} mr={"3"} justifyContent={"center"} alignItems={"center"} borderRadius={"4"}>
           <Image w={4} h={6} source={require("../components/Images/map.png")}/>
           </Box>
           </Pressable>
           </Center>
            </HStack>
            </ShadowBox>} keyExtractor={(item, index) => index.toString()}
             ListEmptyComponent={<Text>Record not found</Text>} />
    </Box>;
};

export default HomeScreen

  
    