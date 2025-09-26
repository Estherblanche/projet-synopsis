import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

interface FullScreenImageProps {
  uri: string;
  visible: boolean;
  onClose: () => void;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  uri,
  visible,
  onClose,
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission refusée",
          "Autorisez l’accès à la galerie pour enregistrer l’image."
        );
        return;
      }

      const fileName = uri.split("/").pop() || "";
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.downloadAsync(uri, fileUri);
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Téléchargements", asset, false);

      Alert.alert("Succès", "Image enregistrée dans la galerie !");
    } catch (error) {
      Alert.alert("Erreur", "Échec du téléchargement.");
      console.error(error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.image} resizeMode="contain" />
        <View style={styles.controls}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fermer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="hidden"
            style={styles.button}
            onPress={handleDownload}
            disabled={downloading}
          >
            {downloading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Télécharger</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FullScreenImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  button: {
    padding: 12,
    backgroundColor: "#1e90ff",
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
