import { FlatList, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "1", label: "Item 1" },
  { id: "2", label: "Item 2" },
  { id: "3", label: "Item 3" },
  { id: "4", label: "Item 4" },
  { id: "5", label: "Item 5" },
  { id: "6", label: "Item 6" },
  { id: "7", label: "Item 7" },
  { id: "8", label: "Item 8" },
];

const Guide = () => {
  const renderItem = ({ item }) => (
    <View className="items-center bg-primary w-40 h-40 border rounded-2xl mr-5 mb-8 justify-center">
      <View className="w-24 h-24 bg-secondary rounded-md mb-2" />
      <Text className="text-center font-pmedium text-xl">{item.label}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center px-5 py-7 pb-0 ">
        <Text className="text-3xl font-pmedium text-center mb-5">
          Data Structures Guide
        </Text>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ justifyContent: "space-between" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Guide;
