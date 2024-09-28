import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import Completed from "../svg/Completed";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const UserCard = () => {
  return (
    <View className="mb-9 w-full h-44 bg-gray-200 rounded-xl items-center flex-row overflow-hidden">
      <View className="ml-3 p-3">
        <Text className="text-xl font-pregular">#880,204</Text>
        <View className="flex">
          <Text className="mr-1 text-2xl font-pmedium text-hEasy">
            Easy <Text className="text-black">: 100</Text>
          </Text>
          <Text className="mr-1 text-2xl font-pmedium text-hMedium">
            Medium <Text className="text-black">: 120</Text>
          </Text>
          <Text className="mr-1 text-2xl font-pmedium text-hHard">
            Hard <Text className="text-black">: 10</Text>
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
