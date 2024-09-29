import {
  Animated,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Splash from "./splash.jsx";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIcon from "./svg/AppIcon";
import LCIcon from "./svg/LCIcon";
import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router'; 

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useState(new Animated.Value(1))[0];
  const router = useRouter(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  if (isLoading) {
    return (
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <Splash />
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center px-9">
        <View className="justify-center items-center mb-5 w-full">
          <AppIcon />
          <Text className="text-5xl font-pmedium mt-5">Hash</Text>
        </View>
      </View>
      <View className="w-5/6 mb-10 px-2 self-center">
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.push('./login')}
          className="h-16 bg-h200 rounded-xl justify-center items-center flex-row"
        >
          <Text className="text-xl font-pmedium">Login With</Text>
          <LCIcon className="ml-2 mb-2" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
