import { Text, View } from 'react-native';
import React from "react";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pthin">index</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default index;


