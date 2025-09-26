import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

export default function BackButton() {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="w-12 h-12 rounded-full"
    >
      <ArrowLeft size={24} color={"white"} />
    </TouchableOpacity>
  );
}
