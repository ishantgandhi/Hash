import { View, Text } from "react-native";
import { Stack, Tabs } from "expo-router";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#4a1c87",
          tabBarInactiveTintColor: "#b084fc",
          tabBarStyle: {
            position: "absolute",
            bottom: 60,
            left: 20,
            right: 20,
            borderRadius: 20,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.23,
            shadowRadius: 13.97,
            height: 70,
            backgroundColor: "#f0e8ff",
            borderTopWidth: 0,
            elevation: 5,
            paddingBottom: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Entypo
                name="home"
                size={30}
                color={focused ? "#4a1c87" : "#b084fc"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="one"
          options={{
            title: "Guide",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons
                name="auto-stories"
                size={30}
                color={focused ? "#4a1c87" : "#b084fc"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
