import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import DailyCard from "./components/DailyCard";
import GuideCard from "./components/GuideCard";
import ComplexityCard from "./components/ComplexityCard";

const index = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="py-12 px-5 border flex-1">
          <Text className="text-3xl font-pregular">
            Hello, <Text className="font-psemibold">Ishant</Text>
          </Text>
          <View className="mt-7">
            <UserCard />
            <DailyCard />
            <View className="flex-row justify-between">
              <GuideCard />
              <ComplexityCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
