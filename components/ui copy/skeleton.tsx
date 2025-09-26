import { View } from "react-native";
import React from "react";

interface Props {
  component: () => React.JSX.Element;
  count: number;
  gap: number;
  orientation: "vertical" | "horizonal";
}
export default function Skeleton(props: Props) {
  return (
    <View className={`flex flex-col gap-${props.gap} animate-pulse`}>
      {Array.from({ length: props.count }).map((_, index) =>
        React.cloneElement(props.component(), { key: index })
      )}
    </View>
  );
}
