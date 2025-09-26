// CustomBottomSheet.tsx
import clsx from "clsx";
import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
} from "react-native";
import ErrorIllustration from "./error-illustration";
import SuccessIllustration from "./success-illustration copy";

const { height } = Dimensions.get("window");

interface Props {
  visible: boolean;
  title: string;
  type: "success" | "error" | "default";
  message: string;
  onClose: () => void;
  closeText?: string;
  positiveText?: string;
  onPositivePress?: () => void;
}

const MyAlert: React.FC<Props> = ({
  visible,
  title,
  type,
  message,
  closeText,
  positiveText,
  onClose,
  onPositivePress,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback>
        <View
          style={styles.overlay}
          className="justify-center items-center p-6"
        >
          <View className="w-full rounded-lg bg-white p-5 flex flex-col items-center justify-center gap-4">
            {/* illustration */}
            {type == "error" && <ErrorIllustration />}
            {type == "success" && <SuccessIllustration />}

            <Text className="font-bold text-gray-900 text-3xl">{title}</Text>
            {/* msessage */}
            <Text className="text-lg text-center">{message}</Text>

            {/* button  */}
            <View className="flex flex-row gap-2 w-full">
              {/* on close press */}
              <Pressable
                onPress={onClose}
                className={clsx(
                  "p-3 rounded-lg flex-1",
                  type == "success"
                    ? "bg-green-500 active:bg-green-600"
                    : type == "error"
                    ? "bg-red-500 active:bg-red-600"
                    : "bg-blue-500 active:bg-blue-600"
                )}
              >
                <Text className="text-white font-semibold text-lg text-center">
                  {closeText || "Ok"}
                </Text>
              </Pressable>

              {/* on positive press */}
              {onPositivePress && positiveText && (
                <Pressable
                  onPress={onPositivePress}
                  className={clsx(
                    "p-3 rounded-lg flex-1 border",
                    type == "success"
                      ? "border-green-500 active:bg-green-100"
                      : type == "error"
                      ? "border-red-500 active:bg-red-100"
                      : "border-blue-500 active:bg-blue-100"
                  )}
                >
                  <Text
                    className={clsx(
                      "font-semibold text-lg text-center",
                      type == "success"
                        ? "text-green-500"
                        : type == "error"
                        ? "text-red-500"
                        : "text-blue-500"
                    )}
                  >
                    {positiveText || "Oui"}
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    // justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});

export default MyAlert;
