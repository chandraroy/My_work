import React from "react";
import { Icon, Center, Box } from "native-base";
import { Path, G, ClipPath, Rect, Circle, Svg } from "react-native-svg";

const Bar= props => {
  return (
    <Svg width="233" height="10" viewBox="0 0 233 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M0 5C0 2.23858 2.23858 0 5 0H233V10H5C2.23857 10 0 7.76142 0 5Z" fill="#FE4190"/>
    </Svg>
  );
};

export default Bar;