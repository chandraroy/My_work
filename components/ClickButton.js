import React from "react";
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import { color } from "styled-system";
import RoundButton from "./Buttons/RoundButton";

const ClickButton = (props) => {
  const [service, setService] = React.useState("");
  return <Center>
     
        <Select selectedValue={service}  w={"100%"} h={100} ml={-90} top={-30} variant="unstyled"
       dropdownIcon={<RoundButton textColor={'white'}
       backGroundColor={"#452C55"}
       width={'100%'}
       text={"Under"}/>}
      
       
        
       
       onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
    
    </Center>;
};

    export default ClickButton
        
    