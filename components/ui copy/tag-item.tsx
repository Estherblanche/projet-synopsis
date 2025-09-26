import { Text, Pressable, View } from "react-native";
import React, { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  variant: "success" | "error" | "info" | "warning";
  text: string;
}

export default function TagItem(props: Props) {
  return (
    <View
      className={clsx(
        "px-2 py-1 flex flex-row items-center justify-center rounded-full gap-2",
        props.variant == "success"
          ? "bg-green-600"
          : props.variant == "error"
          ? "bg-red-600 "
          : props.variant == "info"
          ? "bg-blue-600"
          : "bg-yellow-500"
      )}
    >
      <Text className="text-white text-sm">{props.text}</Text>
    </View>
  );
}
