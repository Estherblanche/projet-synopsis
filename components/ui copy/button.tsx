import { Text, Pressable, View } from "react-native";
import React, { ReactElement } from "react";
import clsx from "clsx";

interface Props {
  variant: "primary" | "secondary" | "danger";
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  iconPosition?: "right" | "left";
  icon?: () => React.JSX.Element;
}

export default function Button(props: Props) {
  return (
    <Pressable
      onPress={props.onPress}
      className={clsx(
        "p-3 flex flex-row items-center justify-center rounded-lg gap-2 h-12",
        props.variant == "primary"
          ? "bg-orange-400 active:bg-orange-500"
          : props.variant == "secondary"
          ?  "bg-green-900 active:bg-green-800"
          : props.variant == "danger"
          ? "bg-red-500 active:bg-red-600"
          : "bg-gray-500 active:bg-gray-600",
        props.disabled && "opacity-70",
        props.loading && "opacity-70"
      )}
    >
      {props.icon && props.iconPosition == "left" && props.icon()}
      {props.text && (
        <Text className="font-semibold text-white">{props.text}</Text>
      )}
      {props.icon && props.iconPosition == "right" && props.icon()}
    </Pressable>
  );
}
