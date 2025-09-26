// CustomBottomSheet.tsx
import { Loader, Loader2 } from "lucide-react-native";
import React, { ReactNode } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";

const { height } = Dimensions.get("window");

interface Props {
  title: string;
  visible: boolean;
}

const FullLoader: React.FC<Props> = ({ visible, title }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback>
        <View style={styles.overlay} className="justify-center items-center">
          <View className="rounded-lg bg-gray-900 p-5 flex flex-row items-center justify-center gap-3">
            <ActivityIndicator animating={visible} color={"white"} />
            <Text className="font-semibold text-white">{title}</Text>
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

export default FullLoader;
