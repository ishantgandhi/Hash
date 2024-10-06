import { Text, View, FlatList, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Algos = () => {
  const [algos, setAlgos] = useState([]);
  const navigation = useNavigation(); 
  useEffect(() => {
    const fetchAlgos = async () => {
      try {
        const response = await fetch("http://localhost:3000/algo/getAll");
        const data = await response.json();
        setAlgos(data);
      } catch (error) {
        console.error("Error fetching algorithms:", error);
      }
    };

    fetchAlgos();
  }, []);

  const renderAlgoItem = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.algoLink)}>
      <View className="p-4 mb-3 bg-h300 rounded-2xl flex-row justify-between items-center">
        <View>
          <Text className="text-xl font-psemibold text-h800">{item.name}</Text>
        </View>
        <AntDesign name="link" size={30} color="#5921a8" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-5 py-7">
        <View className="flex-row justify-between items-center mb-7">
          <Text className="text-3xl font-psemibold">
            Popular Algorithms
          </Text>
        </View>
        <FlatList data={algos} renderItem={renderAlgoItem} />
      </View>
    </SafeAreaView>
  );
};

export default Algos;