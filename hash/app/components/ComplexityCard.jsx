import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import Clock from "../svg/Clock";

const ComplexityCard = () => {
  return (
    <View className="mb-9 w-44 h-44 border-2 border-h900 bg-h300 rounded-xl items-center justify-center overflow-hidden ">
      <View className="absolute items-center justify-center z-0 opacity-50">
        <Clock />
      </View>
      <Text className="text-2xl font-psemibold text-center z-10 text-h900">
        Time Complexity Guide
      </Text>
    </View>
  );
};

export default ComplexityCard;
