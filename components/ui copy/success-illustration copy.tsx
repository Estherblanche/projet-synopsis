import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

type Props = {
  width: number;
  height: number;
};

export default function SuccessIllustration() {
  return (
    <Svg width="160" height="139" viewBox="0 0 160 139" fill="none">
      <Path
        d="M81.4304 8.91284C115.53 8.91284 143.174 36.5562 143.175 70.656C143.175 104.756 115.53 132.4 81.4304 132.4C71.1848 132.4 61.5225 129.903 53.0173 125.487L32.2556 132.253L26.7761 134.038L28.4568 128.525L34.0349 110.228C25.0785 99.5126 19.6873 85.714 19.6873 70.656C19.6875 36.5563 47.3307 8.91307 81.4304 8.91284Z"
        stroke="#00E6AB"
        strokeWidth="6"
      />
      <Path
        d="M76.9745 54.8563C76.9745 48.6778 71.8094 43.5127 65.6309 43.5127C59.4525 43.5127 54.2874 48.6778 54.2874 54.8563"
        stroke="#00E6AB"
        strokeWidth="6"
      />
      <Path
        d="M119.108 54.8563C119.108 48.6778 114.127 43.5127 108.169 43.5127C102.211 43.5127 97.2307 48.6778 97.2307 54.8563"
        stroke="#00E6AB"
        strokeWidth="6"
      />
      <Path
        d="M99.6615 79.1642C99.6615 85.3427 94.4964 90.5078 88.318 90.5078C82.1395 90.5078 76.9744 85.3427 76.9744 79.1642"
        stroke="#00E6AB"
        strokeWidth="6"
      />
      <Rect
        y="55.6667"
        width="88.3179"
        height="19.4462"
        rx="9.72308"
        fill="#00E6AB"
        fillOpacity="0.13"
      />
      <Rect
        x="69.6821"
        y="75.1128"
        width="88.3179"
        height="19.4462"
        rx="9.72308"
        fill="#00E6AB"
        fillOpacity="0.13"
      />
      <Rect
        x="37.2717"
        y="94.5591"
        width="88.3179"
        height="18.6359"
        rx="9.31795"
        fill="#00E6AB"
        fillOpacity="0.13"
      />
      <Path
        d="M19.3189 20.6453L23.076 24.4024L31.6138 15.8646"
        stroke="#00E6AB"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M145.581 39.9639L149.338 43.721L157.876 35.1832"
        stroke="#00E6AB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="134.908"
        cy="7.45641"
        r="5.95641"
        stroke="#00E6AB"
        strokeWidth="3"
      />
      <Circle
        cx="14.9896"
        cy="117.651"
        r="5.95641"
        stroke="#00E6AB"
        strokeWidth="3"
      />
      <Circle
        cx="150.303"
        cy="117.651"
        r="5.95641"
        stroke="#00E6AB"
        strokeWidth="3"
      />
    </Svg>
  );
}
