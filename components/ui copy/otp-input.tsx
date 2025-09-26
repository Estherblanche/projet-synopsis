// OtpInput.tsx
import React, { useRef, useState } from "react";
import {
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  Text,
} from "react-native";

interface Props {
  label: string;
  codeLength?: number;
  onCodeFilled?: (code: string) => void;
  secureTextEntry?: boolean;
  inputMode?: TextInputProps["inputMode"];
  placeholder?: string;
}

const OtpInput: React.FC<Props> = ({
  codeLength = 5,
  onCodeFilled,
  secureTextEntry = false,
  inputMode = "numeric",
  placeholder = "•",
  label,
}) => {
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(""));
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < codeLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newCode.every((c) => c !== "") && onCodeFilled) {
      onCodeFilled(newCode.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && code[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View className="w-full">
      <Text className="text-sm mb-1 font-semibold">{label}</Text>
      <View className="flex-row justify-between gap-4">
        {Array.from({ length: codeLength }).map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            value={code[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            maxLength={1}
            inputMode={inputMode}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            textAlign="center"
            className="py-3 px-3 border rounded-lg border-gray-300 focus:border-gray-500 flex-1"
            multiline={false}
            numberOfLines={1}
            textAlignVertical="center"
          />
        ))}
      </View>
    </View>
  );
};

export default OtpInput;
