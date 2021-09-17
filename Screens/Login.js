import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";
import {login} from '../assets/images/image';

function Login( {navigation}) {
  return (
    <ImageBackground style={style.image} source={login}>
      <LoginForm navigation={navigation} />
    </ImageBackground>
  );
}

export default Login;

const style = StyleSheet.create({
  image: {
    flex: 1
  }
})
