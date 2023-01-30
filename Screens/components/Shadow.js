import React, { useState, useEffect, useRef } from "react";
import {
  Box
} from "native-base";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const ShadowBox = (props) => {

  return (
    <Box
      shadowColor="#171717"
      shadowOpacity="0.2"
      shadowRadius="3"
      w={props.width}
      h={props.height}
      m={"3"}
      rounded="lg"
      shadow={"2"}
      backgroundColor="white"
      borderRadius="8"
      overflow="hidden"
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    />
  );
};

export default ShadowBox;
