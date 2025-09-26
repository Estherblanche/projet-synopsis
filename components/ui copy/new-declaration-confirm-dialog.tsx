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
import Button from "./button";

const { height } = Dimensions.get("window");

interface Props {
  visible: boolean;
  title: string;
  declarationType: string;
  datePerteRetrouvaille?: string;
  documentType: string;
  owner: string;
  onClose: () => void;
  onPositivePress: () => void;
}

const NewDeclarationConfirmDialog: React.FC<Props> = ({
  visible,
  title,
  declarationType,
  datePerteRetrouvaille,
  documentType,
  owner,
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
            <Text className="font-bold text-gray-900 text-3xl">{title}</Text>

            <View className="flex flex-col gap-3 w-full">
              {/* type de declaration */}
              <View className="flex flex-row items-center justify-between">
                <Text className="text-lg text-gray-600">
                  Type de déclaration
                </Text>
                <Text className="text-lg font-semibold">{declarationType}</Text>
              </View>

              {/* date perte / recuperation */}
              <View className="flex flex-row items-center justify-between">
                <Text className="text-lg text-gray-600">
                  Date de{" "}
                  {declarationType == "Perdu" ? "Perte" : "Récupération"}
                </Text>
                <Text className="text-lg font-semibold">
                  {datePerteRetrouvaille || "Non défini"}
                </Text>
              </View>

              {/* type de document */}
              <View className="flex flex-row items-center justify-between">
                <Text className="text-lg text-gray-600">Type de document</Text>
                <Text className="text-lg font-semibold">{documentType}</Text>
              </View>

              {/* proprietaire */}
              <View className="flex flex-row items-center justify-between">
                <Text className="text-lg text-gray-600">Propriétaire</Text>
                <Text className="text-lg font-semibold">{owner}</Text>
              </View>
            </View>

            {/* button  */}
            <View className="flex flex-row gap-4 w-full">
              {/* on close */}
              <View className="flex-1">
                <Button text="Annuler" variant="secondary" onPress={onClose} />
              </View>
              <View className="flex-1">
                <Button
                  text="Confirmer"
                  variant="primary"
                  onPress={onPositivePress}
                />
              </View>
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

export default NewDeclarationConfirmDialog;
