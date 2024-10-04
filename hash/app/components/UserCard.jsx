import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import Completed from "../svg/Completed";
import { Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router"; 


const { height, width } = Dimensions.get("window");

const UserCard = () => {
  const { userData } = useLocalSearchParams(); 
  try {
    parsedUserData = userData ? JSON.parse(userData) : {};
  } catch (error) {
    console.error("Error:", error);
  }
  // console.log("test: ",parsedUserData);
  return (
    <View className="mb-9 w-full h-auto bg-gray-200 rounded-xl items-center flex-row overflow-hidden">
      <View className="ml-3 p-3">
        <Text className="text-xl font-pregular">#{parsedUserData.rank}</Text>
        <View className="flex">
          <Text className="mr-1 text-2xl font-pmedium text-hEasy">
            Easy <Text className="text-black">:{parsedUserData.solved.easy}</Text>
          </Text>
          <Text className="mr-1 text-2xl font-pmedium text-hMedium">
            Medium <Text className="text-black">:{parsedUserData.solved.medium}</Text>
          </Text>
          <Text className="mr-1 text-2xl font-pmedium text-hHard">
            Hard <Text className="text-black">:{parsedUserData.solved.hard}</Text>
          </Text>
        </View>
      </View>
      <View className="flex-1 items-end ">
        <Completed height={height * 0.2} />
      </View>
    </View>
  );
};

export default UserCard;
