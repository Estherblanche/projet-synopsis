import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import DocMasterLogoWhite from "./ui/logo-white";
import {
  ArrowLeft,
  ChevronDown,
  UserCircle,
} from "lucide-react-native";
import Menu from "./ui/menu";
import { router } from "expo-router";

type Props = {
  title: string;
};

export default function AppBar(props: Props) {
  // variables =======================================
  const [isUserConnected, setIsUserConnected] = useState(false);
  return (
    <View
      className="px-5 h-16 flex flex-row items-center"
      style={{ backgroundColor: Colors.general.primary }}
    >
      {/* logo & || title */}
      <View className="flex flex-row gap-3 items-center">
        {(props.title == "Accueil" ||
          props.title == "Recherche" ||
          props.title == "Objet" ||
          props.title == "J'ai retrouvé un document") && <DocMasterLogoWhite />}
        {props.title != "Accueil" &&
          props.title != "Recherche" &&
          props.title !== "Objet" &&
          props.title !== "J'ai retrouvé un document" && (
            <Pressable
              onPress={() => router.back()}
              className="p-3 active:bg-orange-400 rounded-full "
            >
              <ArrowLeft color={"white"} size={24} />
            </Pressable>
          )}

        <Text
          className="text-lg font-semibold text-white"
          style={{ fontSize: 20 }}
        >
          {props.title}
        </Text>
      </View>

      {/* lang & user */}
      {props.title == "Accueil" && (
        <View className="flex flex-row items-center gap-2 ms-auto">
          {!isUserConnected && (
            <>
              <Pressable
                onPress={() => router.push("/(auth)/login")}
                className="p-2 active:bg-orange-400 rounded-lg"
              >
                <UserCircle size={24} color={"white"} />
              </Pressable>

              <Menu
                menuPosition="right"
                triggerClassName="p-2 active:bg-orange-400 rounded-lg flex flex-row items-center gap-1"
                trigger={
                  <>
                    <Text className=" text-white ">Francais</Text>
                    <ChevronDown size={18} color={"white"} />
                  </>
                }
                options={[
                  {
                    label: "English",
                    onPress: () => console.log("Change to english"),
                  },
                  {
                    label: "Arabe",
                    onPress: () => console.log("Change to arabe"),
                  },
                ]}
              />
            </>
          )}

          {isUserConnected && (
            <>
              <Pressable
                onPress={() => router.push("/setting")}
                className="p-2 active:bg-orange-400 rounded-lg"
              >
                <Text className="font-bold text-white text-lg ">EM</Text>
              </Pressable>
              {/* <Menu
                menuPosition="right"
                triggerClassName="p-2 active:bg-orange-400 rounded-lg"
                trigger={
                  <>
                    <Text className="font-bold text-white text-lg ">EM</Text>
                  </>
                }
                options={[
                  {
                    label: "Mon profile",
                    onPress: () => console.log("Go to profile"),
                  },
                  {
                    label: "Parametres",
                    onPress: () => console.log("Go to parametre"),
                  },
                ]}
              /> */}

              <Menu
                menuPosition="right"
                triggerClassName="p-2 active:bg-orange-400 rounded-lg flex flex-row items-center gap-1 float-right float-end"
                trigger={
                  <>
                    <Text className=" text-white ">Francais</Text>
                    <ChevronDown size={18} color={"white"} />
                  </>
                }
                options={[
                  {
                    label: "English",
                    onPress: () => console.log("Change to english"),
                  },
                  {
                    label: "Arabe",
                    onPress: () => console.log("Change to arabe"),
                  },
                ]}
              />
            </>
          )}
        </View>
      )}
    </View>
  );
}
