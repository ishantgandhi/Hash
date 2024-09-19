import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "./components/NavBar";
const index = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <NavBar />
        <View className="flex-1 justify-center items-center p-5 border">
          <View className="justify-center items-center h-full w-full border"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
