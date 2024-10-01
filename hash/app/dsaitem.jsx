import { FlatList, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const DSAItem = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <NavBar />
        <View className="flex-1 px-5 py-7">
          <Text className="text-3xl font-pmedium mb-1">Linked List</Text>
          <Text className="text-xl text-stone-400 font-pmedium mb-5">
            Data Structure
          </Text>
          <Text className="text-xl font-pmedium mb-5">
            A Linked List is a linear data structure where elements, called
            nodes, are stored in sequence but not in contiguous memory, unlike
            arrays. Each node contains two parts: the data, which holds the
            value, and a pointer (or reference) to the next node in the list.
            This structure allows efficient dynamic memory use, enabling easy
            insertion and deletion of elements. Linked lists come in different
            forms, including singly linked lists, where nodes point to the next
            node, and doubly linked lists, which also reference the previous
            node. Although slower for access, linked lists excel in flexible
            memory management.
          </Text>
          <View className="w-full h-16 border bg-stone-200 flex-row justify-between p-4 rounded-xl mb-5">
            <Text className="text-2xl font-pmedium">Space Complexity</Text>
            <Text className="text-2xl font-psemibold text-secondary ">
              O(n)
            </Text>
          </View>
          <View className="w-full   flex-row justify-between px-1 rounded-xl mb-5">
            <View className=" bg-primary w-44 h-44 border rounded-2xl  ">
              <Text className="text-2xl font-pmedium m-4">Time Complexity</Text>
            </View>
            <View className=" bg-primary w-44 h-44 border rounded-2xl  ">
              <Text className="text-2xl font-pmedium m-4">View The Code</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DSAItem;
