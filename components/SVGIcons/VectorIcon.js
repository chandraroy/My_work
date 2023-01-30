import React from "react";
import { Icon, Center, Box } from "native-base";
import { Path, G, ClipPath, Rect, Circle, Svg } from "react-native-svg";

const VectorIcon = props => {
  return (
    <Svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="6.5" cy="6.5" r="6" stroke="#D2BAF5" />
      <Path
        d="M5.6875 5.71665C5.6875 5.55096 5.82181 5.41665 5.9875 5.41665H7.0125C7.17819 5.41665 7.3125 5.55096 7.3125 5.71665V9.44998C7.3125 9.61566 7.17819 9.74998 7.0125 9.74998H5.9875C5.82181 9.74998 5.6875 9.61566 5.6875 9.44998V5.71665Z"
        fill="#D2BAF5"
      />
      <Path
        d="M5.6875 3.52081C5.6875 3.07208 6.05127 2.70831 6.5 2.70831C6.94873 2.70831 7.3125 3.07208 7.3125 3.52081C7.3125 3.96954 6.94873 4.33331 6.5 4.33331C6.05127 4.33331 5.6875 3.96954 5.6875 3.52081Z"
        fill="#D2BAF5"
      />
</Svg>
  );
};

export default VectorIcon;