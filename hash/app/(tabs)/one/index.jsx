import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "arrays", label: "Arrays" },
  { id: "hashmaps", label: "Hash Maps" },
  { id: "linkedlist", label: "Linked List" },
  { id: "stack", label: "Stack" },
  { id: "queue", label: "Queue" },
  { id: "tree", label: "Tree" },
  { id: "graph", label: "Graph" },
  { id: "heap", label: "Heap" },
];

const Guide = () => {
  const renderItem = ({ item }) => (
    <Link href={{ pathname: "/(tabs)/one/dsaitem", params: { id: item.id } }} asChild>
      <TouchableOpacity className="items-center bg-h300 w-40 h-40 border rounded-2xl mr-5 mb-8 justify-center">
        <Text className="text-center text-h800 w-3/5 font-pmedium text-2xl">
          {item.label}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center px-5 pt-7 pb-20 ">
        <Text className="text-3xl font-pmedium mb-5">Data Structures Guide</Text>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          contentContainerStyle={{ justifyContent: "space-between" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Guide;
