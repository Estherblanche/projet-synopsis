import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ArrowLeft, ArrowRightCircle } from "lucide-react-native";
import { router } from "expo-router";
import { Carousel } from "@ant-design/react-native";
import { Colors } from "@/constants/Colors";
import FinancialOptionBgCard from "./financial-option-bg-card";
import PricingBadge from "./prcing-badge";

export default function PlanCarousel() {
  let carousel: null | Carousel;
  const [selectedIndex, setSelectedIndex] = useState(0);

  // functions =======================================

  /**
   * Navigate to login page
   * @param index
   */
  const handleCarouselChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Carousel
      dotActiveStyle={{
        width: 20,
        backgroundColor: Colors.general.primary,
      }}
      dotStyle={{ backgroundColor: "#fed7aa" }}
      style={styles.wrapper}
      selectedIndex={selectedIndex}
      afterChange={handleCarouselChange}
      ref={(ref) => (carousel = ref)}
    >
      {/* compte standard */}
      <View className="w-full h-full gap-2 flex flex-col">
        <Text className="font-semibold">Niveau de compte</Text>
        {/* card */}
        <View className="rounded-2xl overflow-hidden h-40">
          <FinancialOptionBgCard />
          <View className="absolute w-full h-full p-5 flex flex-row items-center gap-4">
            {/* text area */}
            <View className="flex-1 flex-col flex gap-1">
              <Text className="text-2xl text-white font-semibold">
                Standard
              </Text>
              <Text className="text-orange-100">01 document / pièce</Text>
              <Pressable className="p-2 max-w-44 w-max bg-orange-400 rounded-lg mt-3 flex flex-row items-center justify-between">
                <Text className="text-white font-semibold">500 XAF / An</Text>
                <ArrowRightCircle size={24} color={"white"} />
              </Pressable>
            </View>
            {/* badge */}
            <PricingBadge />
          </View>
        </View>
      </View>
      {/* compte Pro */}
      <View className="w-full h-full gap-2 flex flex-col">
        <Text className="font-semibold">Niveau de compte</Text>
        {/* card */}
        <View className="rounded-2xl overflow-hidden h-40">
          <FinancialOptionBgCard />
          <View className="absolute w-full h-full p-5 flex flex-row items-center gap-4">
            {/* text area */}
            <View className="flex-1 flex-col flex gap-1">
              <Text className="text-2xl text-white font-semibold">Pro</Text>
              <Text className="text-orange-100">03 document / pièce</Text>
              <Pressable className="p-2 max-w-44 w-max bg-orange-400 rounded-lg mt-3 flex flex-row items-center justify-between">
                <Text className="text-white font-semibold">1500 XAF / An</Text>
                <ArrowRightCircle size={24} color={"white"} />
              </Pressable>
            </View>
            {/* badge */}
            <PricingBadge />
          </View>
        </View>
      </View>
      {/* compte Vip */}
      <View className="w-full h-full gap-2 flex flex-col">
        <Text className="font-semibold">Niveau de compte </Text>
        {/* card */}
        <View className="rounded-2xl overflow-hidden h-40">
          <FinancialOptionBgCard />
          <View className="absolute w-full h-full p-5 flex flex-row items-center gap-4">
            {/* text area */}
            <View className="flex-1 flex-col flex gap-1">
              <Text className="text-2xl text-white font-semibold">Vip</Text>
              <Text className="text-orange-100">05 document / pièce</Text>
              <Pressable className="p-2 max-w-44 w-max bg-orange-400 rounded-lg mt-3 flex flex-row items-center justify-between">
                <Text className="text-white font-semibold">3000 XAF / An</Text>
                <ArrowRightCircle size={24} color={"white"} />
              </Pressable>
            </View>
            {/* badge */}
            <PricingBadge />
          </View>
        </View>
      </View>
    </Carousel>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 210,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
});
