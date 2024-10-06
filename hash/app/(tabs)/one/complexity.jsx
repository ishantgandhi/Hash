import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Complexity = () => {
  const { id } = useLocalSearchParams();
  const [timeData, setTimeData] = useState(null);
  const [error, setError] = useState("");

  const getTimeData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/time/${id}`);
      const data = await response.json();

      if (response.status === 404) {
        setError("Item not found");
        return;
      }

      setTimeData(data);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) getTimeData();
  }, [id]);

  const complexitiesArray = timeData
    ? Object.entries(timeData.complexities).map(([key, value]) => ({
        key: key,
        value: value,
      }))
    : [];

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-5 py-7">
        {error ? (
          <>
            <View className="flex-1 justify-center items-center px-2">
              <AntDesign name="frowno" size={200} color="#e6d9ff" />
              <Text className="mt-5 text-2xl font-pregular text-h400">
                {error}
              </Text>
            </View>
          </>
        ) : null}
        {timeData && (
          <>
            <Text className="text-3xl font-psemibold mb-1">{timeData.name}</Text>
            <Text className="text-xl text-h400 font-pregular mb-3">
              Time Complexity
            </Text>
            <View className="w-full h-full pb-40">
              <FlatList
                data={complexitiesArray}
                renderItem={({ item }) => (
                  <View className="flex flex-row justify-between items-center border-b h-20">
                    <Text className="text-xl font-pmedium ">{item.key}</Text>
                    <Text className="text-xl font-pmedium text-h800">
                      {item.value}
                    </Text>
                  </View>
                )}
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Complexity;
