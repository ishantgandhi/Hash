import { Text, View, Dimensions } from "react-native";
import React from "react";
import Flame from "../svg/Flame"; // Assuming Flame is a custom SVG component

const DailyCard = () => {
  // Get screen dimensions
  const { width, height } = Dimensions.get("window");

  return (
    <View className="mb-9 w-full h-44 rounded-xl overflow-hidden bg-gray-200 p-4 relative">
      <View style={{ position: "absolute", right: 0, bottom:-10 }}>
        <Flame
          name="fire"
          width={width * 0.4} 
          height={height * 0.2} 
          color="#FFA500"
        />
      </View>
      <Text className="text-3xl font-pmedium text-center mb-2">
        Daily Question
      </Text>
      <Text className="text-xl font-pregular mb-2">
        2220. Minimum Bit Flips to Convert Number
      </Text>
      <View className="flex-row self-end items-center">
        <Text className="text-xl font-psemibold text-amber-500 text-center">
          100
        </Text>
      </View>
    </View>
  );
};

export default DailyCard;
