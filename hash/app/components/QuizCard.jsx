import { Image, ScrollView, Text, View, TextInput } from "react-native";
import React from "react";

const QuizCard = () => {
  return (
    <View className="w-full h-20 bg-tertiary border-4 border-quaternary rounded-xl justify-center items-center">
      <Text className="text-3xl font-pmedium text-white">Take A Quiz</Text>
    </View>
  );
};

export default QuizCard;
