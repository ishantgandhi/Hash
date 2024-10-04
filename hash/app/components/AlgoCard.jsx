import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import TreeIcon from "../svg/TreeIcon";
import {useRouter} from 'expo-router';

const AlgoCard = () => {
  return (
    <TouchableOpacity 
    activeOpacity={0.5}
    className="mb-9 w-full h-44 border-2 border-h900 bg-h300 rounded-xl p-4 justify-center overflow-hidden ">
      <View className="absolute  z-0 opacity-50 self-end ">
        <TreeIcon />
      </View>
      <Text className="text-3xl w-1/2 font-pmedium text-left z-10 text-h900">
        Popular Algorithms
      </Text>
    </TouchableOpacity>
  );
};

export default AlgoCard;
