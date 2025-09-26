import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

type Props = {
  width: number;
  height: number;
};

export default function PayPointLogo(props: Props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 100 97"
      fill="none"
    >
      <Rect width="100" height="96.9613" fill="#214038" />
      <Path
        d="M89.4971 36.3243C87.4971 31.8243 41.4971 23.3243 39.4971 26.8243C37.4971 30.3243 54.9971 42.3244 55.9971 45.3243C56.9971 48.3242 48.9971 68.3244 52.4971 70.8243C55.9971 73.3242 91.4971 40.8243 89.4971 36.3243Z"
        fill="#D66B00"
      />
      <Rect
        x="10.4216"
        y="43.3276"
        width="32"
        height="9.05628"
        rx="4.52814"
        transform="rotate(-17.8615 10.4216 43.3276)"
        fill="#D66B00"
      />
      <Rect
        x="21.0334"
        y="52.2107"
        width="24.082"
        height="9.05628"
        rx="4.52814"
        transform="rotate(-17.8615 21.0334 52.2107)"
        fill="#D66B00"
      />
      <Rect
        x="32.7739"
        y="60.2212"
        width="14.3354"
        height="9.05628"
        rx="4.52814"
        transform="rotate(-17.8615 32.7739 60.2212)"
        fill="#D66B00"
      />
    </Svg>
  );
}
