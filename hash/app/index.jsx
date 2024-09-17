import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIcon from "./svg/AppIcon";
import LCIcon from "./svg/LCIcon";

const index = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className=" h-5/6	mt-20 pt-5 justify-between items-center ">
          <View className="justify-center items-center">
            <AppIcon className="mb-5" />
            <Text className="text-5xl font-pmedium">Hash</Text>
          </View>
          <View className="w-85/4 h-35/8 bg-primary border rounded-xl justify-center items-center flex-row gap-2.5 ">
            <Text className="mb-1 text-2xl font-pmedium">Login With</Text>
            <LCIcon className="mb-2"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
