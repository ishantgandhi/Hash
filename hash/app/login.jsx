import { Image, ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from 'expo-router';

import { SafeAreaView } from "react-native-safe-area-context";
import AppIcon from "./svg/AppIcon";

const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-2">
          <View className="justify-center items-center mb-5 w-full">
            <AppIcon width="160" height="160" />
            <TextInput
              className="bg-hCard bg-gray-200 border border-gray-300 rounded-lg w-5/6 h-16 mt-5 px-5 font-pmedium text-black"
              placeholder="Enter Leetcode Username"
            />
          </View>
        </View>
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => router.push('./(tabs)/home')}
        className="w-5/6 mb-10 px-2 self-center">
          <View className=" h-16 bg-h200 rounded-xl justify-center items-center flex-row ">
            <Text className="text-xl font-pmedium">Login</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
