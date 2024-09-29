import { Animated, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import Splash from "./splash.jsx";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setIsLoading(false));
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
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Link href="/(tabs)/home" className="text-blue-500 text-3xl">Home</Link>
    </View>
  );
};

export default Index;
