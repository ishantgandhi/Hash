import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import TreeIcon from "../svg/TreeIcon";

const GuideCard = () => {
  return (
    <View className="mb-9 w-full h-40 bg-gray-200 border rounded-xl items-center justify-center overflow-hidden ">
      <View className="absolute items-center justify-center z-0 opacity-50">
        <TreeIcon />
      </View>

      <Text className="text-4xl font-pmedium text-center w-64 z-10">
        Data Structures Guide
      </Text>
    </View>
  );
};

export default GuideCard;
