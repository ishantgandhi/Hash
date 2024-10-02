import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "../components/UserCard";
import DailyCard from "../components/DailyCard";
import AlgoCard from "../components/AlgoCard";
import { useLocalSearchParams } from "expo-router"; 

const Home = () => {
  const { userData } = useLocalSearchParams(); 
  
  try {
    parsedUserData = userData ? JSON.parse(userData) : {};
  } catch (error) {
    console.error("Error:", error);
  }
  const userName = parsedUserData.userName.split(" ")[0]
  // console.log(userName);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="py-12 px-6 flex-1">
        <Text className="text-3xl font-pregular">
          Hello, <Text className="font-psemibold">{userName}</Text>
        </Text>
        <View className="mt-7">
          <UserCard userData={parsedUserData} />
          <DailyCard userData={parsedUserData}  />
          <View className="flex-row justify-between">
            <AlgoCard />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
