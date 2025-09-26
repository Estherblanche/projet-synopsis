import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";

type Props = {
  value?: string;
  label?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  inputMode?:
    | "decimal"
    | "email"
    | "none"
    | "numeric"
    | "search"
    | "tel"
    | "text"
    | "url";
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
};

//@ts-ignore
const Input = (props: Props) => {
  return (
    <View className="w-full">
      {props.label && (
        <Text className="text-sm mb-1 font-semibold">{props.label}</Text>
      )}

      <TextInput
        secureTextEntry={props.secureTextEntry}
        inputMode={props.inputMode}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        className="w-full py-3 px-3 border rounded-lg border-gray-300 focus:border-gray-500 bg-white"
        multiline={false}
        numberOfLines={1}
        textAlignVertical="center"
        editable={props.editable}
      />
    </View>
  );
};

export default Input;
