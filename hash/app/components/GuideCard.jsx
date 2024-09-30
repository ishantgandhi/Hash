import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import TreeIcon from "../svg/TreeIcon";
import {useRouter} from 'expo-router';

const GuideCard = () => {
  const router = useRouter();
  return (
    <TouchableOpacity 
    onPress={() => router.navigate("../guide")}
    activeOpacity={0.5}
    className="mb-9 w-44 h-44 border-2 border-h900 bg-h300 rounded-xl items-center justify-center overflow-hidden ">
      <View className="absolute items-center justify-center z-0 opacity-50">
        <TreeIcon />
      </View>
      <Text className="text-2xl font-psemibold text-center z-10 text-h900">
        Data Structures Guide
      </Text>
    </TouchableOpacity>
  );
};

export default GuideCard;
