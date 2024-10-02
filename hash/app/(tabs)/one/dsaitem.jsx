import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const DSAItem = () => {
  const { id } = useLocalSearchParams();
  const [dsaData, setDsaData] = useState(null);
  const [error, setError] = useState("");

  const getDSAData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/dsa/${id}`);
      const data = await response.json();

      if (response.status === 404) {
        setError("Item not found");
        return;
      }

      setDsaData(data);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) getDSAData();
  }, [id]);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {error ? (
          <>
            <View className="flex-1 justify-center items-center px-2">
              <AntDesign name="frowno" size={200} color="#e6d9ff" />
              <Text className="mt-5 text-2xl font-pregular text-h400">{error}</Text>
            </View>
          </>
        ) : null}
        {dsaData ? (
          <>
            <View className="px-5 pt-7 pb-24">
              <Text className="text-3xl font-pmedium mb-1">{dsaData.name}</Text>
              <Text className="text-xl text-h400 font-pmedium mb-5">
                Data Structure
              </Text>
              <Text className="text-lg font-pmedium mb-5">
                {dsaData.description}
              </Text>
              <View className="w-full h-16 bg-stone-200 flex-row justify-between p-4 rounded-xl mb-5">
                <Text className="text-xl font-pmedium">Space Complexity</Text>
                <Text className="text-xl font-psemibold text-h800">
                  {dsaData.space}
                </Text>
              </View>
              <View className="w-full flex-row justify-between px-1 rounded-xl mb-5">
                <Link href={"/(tabs)/one/complexity"} asChild>
                  <TouchableOpacity className=" bg-h300 w-44 h-40 border rounded-2xl">
                    <Text className="text-xl font-pmedium m-4">
                      Time Complexity
                    </Text>
                  </TouchableOpacity>
                </Link>
                <TouchableOpacity className=" bg-h300 w-44 h-40 border rounded-2xl">
                  <Text className="text-xl font-pmedium m-4">
                    View The Code
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DSAItem;
