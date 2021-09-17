import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { primaryColor } from "../../assets/color/color";

function Home() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: `${primaryColor}` },
        tabBarActiveTintColor: "#ffff",
      }}
    >
      <Tab.Screen name="For you" component={Tab1} />
      <Tab.Screen name="Adinkra arts" component={Tab2} />
      <Tab.Screen name="Adinkra fabrics" component={Tab3} />
    </Tab.Navigator>
  );
}

export default Home;
