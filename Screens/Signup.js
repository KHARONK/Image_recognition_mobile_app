import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import SignupForm from "../components/SignupForm";
import { login } from "../assets/images/image";

function Signup({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground style={style.image} source={login}>
        <SignupForm navigation={navigation} />
      </ImageBackground>
    </View>
  );
}

export default Signup;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
