import React, {useState} from "react";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider,WarningOutlineIcon, ScrollView } from "native-base";
import { Formik } from "formik";
import * as Yup from "yup"
const LoginScreen = (props) => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email("well that's not an email"),
    password: Yup.string()
      .required()
      .min(2, "pretty sure this will be hacked")
  });

  const [formData, setData] = React.useState({});
  const [password,setPassword] =React.useState({});
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors,
        name: 'Name is required'
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors,
        name: 'Name is too short'
      });
      return false;
    }

    else if (password.password === undefined || password.password.length < 1){
      setErrors({ ...errors,
        password: 'Password is too short'
      });
      return false

    }

    return true;
  };

  const onSubmit = () => {
    validate() ? props.navigation.navigate("HomeScreen") : alert('Validation Failed');
  };
  
    
  return <Formik  
  onSubmit={values => console.log(values)}
  validationSchema={validationSchema}>
    <ScrollView>
    <Box h={"full"} w={"full"} bg={"white"}><Center w="100%" >
      <Box safeArea p="2" py="8" w="90%" maxW="290" >
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired isInvalid={'name' in errors}>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChangeText={value => setData({ ...formData,
        name: value
      })}
            />
             {'name' in errors ? <FormControl.ErrorMessage> Name should contain atleast 3 character.</FormControl.ErrorMessage> : <FormControl.HelperText>
             Name should contain atleast 3 character.
             </FormControl.HelperText>}
          </FormControl>
          <FormControl isRequired isInvalid={'password' in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Input secureTextEntry={true} onChangeText={value => setPassword({ ...password,
        password: value
      })}/>
       {'password' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
             password should be max 3 in length.
             </FormControl.HelperText>}
            
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" 
          
          onPress={
           onSubmit
            
          }>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
    </Box>
    </ScrollView>
    </Formik>
    
};
export default LoginScreen
   
    