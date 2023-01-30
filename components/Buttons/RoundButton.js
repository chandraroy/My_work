import React, { useState, useEffect, useRef } from "react";
import { Box, Button, useColorMode, Text } from "native-base";


const RoundButton = (props) => {
 
  console.log('round button',props)
  const { colorMode } = useColorMode();
  const borderColor = colorMode === "dark" ? "#212121" : "#ffffff";
  const TextColor = colorMode === "dark" ? "#ffffff" : "#FF0000";

  return (
    <>
      <Box>
        <Button
          alignItems={"center"}
          width={props.width}
          bg={props.backGroundColor}
          borderRadius={"20"}
          _pressed={{
            bg: "buttonbg.100",
            _text: {
              color: "white",
            },
          }}
          
        >
          <Text
            color={props.textColor}
            fontSize={"14"}
s            fontWeight={"600"}
            fontStyle={"Montserrat"}
          >
            {props.text}
          </Text>
          
        </Button>
      </Box>
    </>
  );
};

export default RoundButton;
