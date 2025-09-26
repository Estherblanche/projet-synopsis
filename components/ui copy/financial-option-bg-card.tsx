import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

type Props = {
  width: number;
  height: number;
};

export default function FinancialOptionBgCard() {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 100% 100%"
      fill="none"
    >
      <G clip-path="url(#clip0_4117_968)">
        <Rect width="100%" height="100%" fill="#DF820B" />
        <Path
          opacity="0.22"
          d="M143.416 121.398C52.6694 143.039 45.3189 178.015 34 195H371C377.627 195 383 189.627 383 183V-56C383 -56 330.178 -46.5639 301.881 10.0526C279.736 54.36 262.265 93.0571 143.416 121.398Z"
          fill="white"
          fillOpacity="0.3"
        />
        <Path
          opacity="0.22"
          d="M171.416 154.722C80.6694 167.74 73.3189 188.782 62 199H399C405.627 199 411 193.627 411 187V48C411 48 358.178 53.6767 329.881 87.7368C307.736 114.392 290.265 137.672 171.416 154.722Z"
          fill="white"
          fillOpacity="0.3"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4117_968">
          <Rect width="343" height="160" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
