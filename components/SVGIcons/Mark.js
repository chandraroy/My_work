import React from "react";
import { Icon, Center, Box } from "native-base";
import { Path, G, ClipPath, Rect, Circle, Svg } from "react-native-svg";

const Mark = props => {
  return (
    <Icon size={"md"} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" left={-25}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.559998 5.5C0.559998 2.77172 2.77172 0.559998 5.5 0.559998C8.22827 0.559998 10.44 2.77172 10.44 5.5C10.44 8.22827 8.22827 10.44 5.5 10.44C2.77172 10.44 0.559998 8.22827 0.559998 5.5Z" fill="#FFE400"/>
    </Icon>
  );
};

export default Mark;