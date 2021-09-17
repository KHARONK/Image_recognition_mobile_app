import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Welcome from "./Screens/Welcome";
import Signup from "./Screens/Signup";
import LandingPage from "./Screens/LandingPage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { primaryColor } from './assets/color/color';
// import { Modal, Text, View } from 'react-native';

function App() {

  function Icon() {
    return (
      <Ionicons
        name="ellipsis-vertical"
        size="1.5rem"
        color={primaryColor}
      />
    );
  }

  

  // function Modal() {
  //   return (
  //     <View>
  //       <Modal visible = {true}>
  //         <Text>modal</Text>
  //       </Modal>
  //      </View>
  //   )
  // }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen options={{headerShown: false}} name="ADINKRA ZONE" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" options={{headerRight: () => <Icon />}} component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


