import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      {/* Collection Tab */}
      <Tabs.Screen
        name="Models"
        options={{
          title: "Models",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="magic" color={color} size={size} />
          ),
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
