import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
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
    <Link href={"/(tabs)/one/dsaitem"} asChild>
      <TouchableOpacity className="items-center bg-h300 w-40 h-40 border rounded-2xl mr-5 mb-8 justify-center">
        <View className="w-24 h-24 bg-secondary rounded-md mb-2" />
        <Text className="text-center text-h800 font-pmedium text-xl">
          {item.label}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center px-5 pt-7 pb-20 ">
        <Text className="text-3xl font-pmedium mb-5">
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
