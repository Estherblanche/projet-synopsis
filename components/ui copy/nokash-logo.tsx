import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

type Props = {
  width: number;
  height: number;
};

export default function NokashLogo(props: Props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 162 139"
      fill="none"
    >
      <Rect
        x="15.3577"
        y="15.4429"
        width="81.0695"
        height="112.592"
        rx="16"
        transform="rotate(7.83963 15.3577 15.4429)"
        fill="#00A652"
      />
      <Rect
        x="83.5201"
        width="81.0695"
        height="112.592"
        rx="16"
        transform="rotate(15 83.5201 0)"
        fill="white"
      />
    </Svg>
  );
}
