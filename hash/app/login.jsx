import { ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import AppIcon from "./svg/AppIcon";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState(''); 
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null); 

  const handleLogin = async () => {
    if (!username) {
      setError('No username entered');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/lc/${username}`);
      const data = await response.json();

      if (response.status === 404) {
        setError('No User');
        return;
      }

      console.log(data);

      setUserData(data);

      router.push('./(tabs)/home', { userData: data });
    } catch (error) {
      setError('Error fetching user data');
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-2">
          <View className="justify-center items-center mb-5 w-full">
            <AppIcon width="160" height="160" />
            <TextInput
              className="bg-hCard bg-gray-200 border border-gray-300 rounded-lg w-5/6 h-16 mt-5 px-5 font-pmedium text-black"
              placeholder="Enter Leetcode Username"
              value={username}
              onChangeText={setUsername} 
              autoCapitalize="none" 
            />
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
          </View>
        </View>
        <TouchableOpacity 
          activeOpacity={0.5}
          onPress={handleLogin} 
          className="w-5/6 mb-10 px-2 self-center">
          <View className=" h-16 bg-h200 rounded-xl justify-center items-center flex-row ">
            <Text className="text-xl font-pmedium">Login</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
