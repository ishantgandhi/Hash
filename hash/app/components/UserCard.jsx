import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import AppIcon from "../svg/AppIcon";

const UserCard = () => {
  return (
    <View className="mb-9 w-full h-44 bg-gray-200 border rounded-xl p-3 items-center flex-row">
      <AppIcon width="130px" />
      <View className="ml-3">
        <Text className="text-3xl font-psemibold">Ishant Gandhi</Text>
        <Text className="text-2xl font-pregular">#880,204</Text>
        <View className="flex-row">
          <Text className="mr-1 text-2xl font-psemibold text-tertiary  ">100</Text>
          <Text className="mr-1 text-2xl font-psemibold text-orange-300 ">150</Text>
          <Text className="mr-1 text-2xl font-psemibold text-red-600 ">78</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
