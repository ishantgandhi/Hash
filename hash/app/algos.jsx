import { Text, View, FlatList, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const Algos = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-5 py-7 items-center justify-center">
        <Ionicons name="construct" size={200} color="#e6d9ff" />
        <Text className="mt-5 text-2xl font-pregular text-h400">
          Under Construction
        </Text>
        <Text className="text-lg font-plight text-h400">
          Please Check back soon
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Algos;
