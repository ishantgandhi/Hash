import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Flame from "../svg/Flame";
import { useLocalSearchParams } from "expo-router";

const DailyCard = () => {
  const { userData } = useLocalSearchParams();
  const [hoursLeft, setHoursLeft] = useState(0);

  try {
    parsedUserData = userData ? JSON.parse(userData) : {};
  } catch (error) {
    console.error("Error:", error);
  }

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    const calculateHoursLeft = () => {
      const currentTimeUTC = new Date();
      const resetTimeUTC = new Date();
      resetTimeUTC.setUTCHours(24, 0, 0, 0);
      const timeDiff = resetTimeUTC - currentTimeUTC;
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      setHoursLeft(hours);
    };

    calculateHoursLeft();

    const interval = setInterval(calculateHoursLeft, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="mb-9 w-full h-44 max-h-52 rounded-xl overflow-hidden bg-gray-200 p-5 relative ">
      <View style={{ position: "absolute", right: 0, bottom: -10 }}>
        <Flame
          name="fire"
          width={width * 0.4}
          height={height * 0.2}
          color="#FFA500"
        />
      </View>
      <Text className="text-3xl font-pmedium text-center mb-3">
        Daily Question
      </Text>
      <Text className="text-2xl font-pregular text-center ">
        {parsedUserData.challenge}
      </Text>
      <View className="flex-row self-end absolute bottom-3 right-5">
        <Text className="text-base font-psemibold text-amber-500 text-center">
          {hoursLeft} hours
        </Text>
      </View>
    </View>
  );
};

export default DailyCard;
