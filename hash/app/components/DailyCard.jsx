import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient"; // Make sure to use the correct import
import Flame from "@expo/vector-icons/FontAwesome6";

const DailyCard = () => {
  return (
    <View className="mb-9 w-full h-40 rounded-xl overflow-hidden border">
      <LinearGradient
        colors={["#FFFFFF", "#60CECE"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }} // Change to left to right
        className="flex-1 p-3"
      >
        <Text className="text-3xl font-pmedium text-center mb-2">
          Daily Question
        </Text>
        <Text className="text-2xl font-pregular text-center mb-1">
          2220. Minimum Bit Flips to Convert Number
        </Text>
        <View className="flex-row self-end items-center">
          <Flame name="fire-flame-curved" size={15} color="orange" />
          <Text className="text-xl font-psemibold text-amber-500 text-center ml-1">
            100
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default DailyCard;
