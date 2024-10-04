import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Flame from "../svg/Flame";
import { useLocalSearchParams } from "expo-router"; 
import { Link } from "expo-router";


const DailyCard = () => {
  const { userData } = useLocalSearchParams();

  try {
    parsedUserData = userData ? JSON.parse(userData) : {};
  } catch (error) {
    console.error("Error:", error);
  }
  // console.log("test: ", parsedUserData);

  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity
     className="mb-9 w-full h-44 rounded-xl overflow-hidden bg-gray-200 p-4 relative">
      <View style={{ position: "absolute", right: 0, bottom: -10 }}>
        <Flame
          name="fire"
          width={width * 0.4}
          height={height * 0.2}
          color="#FFA500"
        />
      </View>
      <Text className="text-3xl font-pmedium text-center mb-5">
        Daily Question
      </Text>
      <Text className="text-2xl font-pregular text-center">
        {parsedUserData.challenge}
      </Text>
      <View className="flex-row self-end items-center">
        <Text className="text-xl font-psemibold text-amber-500 text-center fixed top-7 right-1">
          100
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DailyCard;
