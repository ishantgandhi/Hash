import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import Splash from "./splash.jsx";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Link href="/(tabs)/home" className="text-blue-500 text-3xl">Home</Link>
    </View>
  );
};

export default Index;
