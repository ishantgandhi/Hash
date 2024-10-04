import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="dsaitem" options={{ headerShown: false }} /> 
      <Stack.Screen name="complexity" options={{ headerShown: false }} /> 
      <Stack.Screen name="algos" options={{ headerShown: false }} /> 
    </Stack>
  );
};

export default _layout;
