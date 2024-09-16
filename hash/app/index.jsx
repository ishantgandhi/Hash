import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#1CBABA"]}
      start={{ x: 0.05, y: 0.1 }}
      end={{ x: 0, y: 1.5 }}
      className="h-full"
    >
      <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{height:"100%"}}>
          <View className=" h-full justify-center items-center">
            <Image source={require("../assets/images/hlogo.png")} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default index;
