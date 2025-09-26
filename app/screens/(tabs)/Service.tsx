 import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ServicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}> Liste des Services</Text>

      <Link href="/screens/services/Gestion presence" asChild>
        <TouchableOpacity style={{ padding: 15, backgroundColor: "blue", borderRadius: 8 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Gestion Présence</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/screens/services/Gestion conges" asChild>
    <TouchableOpacity style={{ padding: 15, backgroundColor: "blue", borderRadius: 8 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Gestion conges</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
  