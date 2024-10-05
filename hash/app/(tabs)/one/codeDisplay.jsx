import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const CodeDisplay = () => {
  const { code } = useLocalSearchParams();
  const { name } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="px-5 pt-7 pb-24">
          <Text className="text-3xl font-psemibold mb-1">{name}</Text>
          <Text className="text-xl text-h400 font-pregular mb-5">
            View the Code 
          </Text>
          <View className="border p-2 bg-h200 rounded-xl border-h800 mb-10">
            <Text className="text-lg font-cprime text-h800 whitespace-pre-wrap">{code}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CodeDisplay;
