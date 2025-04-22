import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name='nature-meditate'
        options={{
          tabBarLabel: "Meditasyon",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='flower-tulip'
              size={24}
              color={color}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='affirmations'
        options={{
          tabBarLabel: "Olumlamalar",
          tabBarIcon: ({ color }) => (
            <Entypo name='open-book' size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
