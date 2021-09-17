import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./HomeParent/Home";
import CameraTab from "./HomeParent/CameraTab";
import Ionicons from "@expo/vector-icons/Ionicons";
import { primaryColor } from "../assets/color/color";

function LandingPage() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "#dee8e9",
          tabBarIcon: () => (
            <Ionicons name="ios-home" size="1.3rem" color={`${primaryColor}`} />
          ),
        }}
      />

      <Tab.Screen
        name="Camera"
        component={CameraTab}
        options={{
          tabBarActiveBackgroundColor: "#dee8e9",
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="ios-camera"
              size="1.3rem"
              color={`${primaryColor}`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default LandingPage;
