import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor } from "../assets/color/color";
import { textInputMarginLeft } from '../assets/dimensions/Dimensions';
import axios from 'axios';

function LoginButton({ children, data, navigation }) {

  function login() {
    axios
      .post("http://localhost:5000/api/login", data)
      .then((response) => {
            console.log(response)
            navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

    return (
      <TouchableOpacity
        style={style.container}
        onPress={() => login()}
      >
        {children}
      </TouchableOpacity>
    );
}

export default LoginButton;

const style = StyleSheet.create({
  container: {
      backgroundColor: `${primaryColor}`,
      alignItems: "center",
      marginLeft: `${textInputMarginLeft}`,
      padding: "10px",
      width: "30%",
      borderRadius: "5px",
  },
});
