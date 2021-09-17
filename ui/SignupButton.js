import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { primaryColor } from "../assets/color/color";
import { textInputMarginLeft } from "../assets/dimensions/Dimensions";
import axios from 'axios';


function SignupButton({ children, data }) {

  const { firstname, lastname, email, password, confirmPassword } = data;

  function createUser() {
    if (password !== confirmPassword) {
      return alert('password mismatch');
    }

    const requestBody = {
      firstname,
      lastname,
      email,
      password
    }

    axios
      .post("http://localhost:5000/api/signup", requestBody)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err.response);
      });

  }

  return (
    <TouchableOpacity type= "submit" onPress = {() => createUser()} style={style.container}>{children}</TouchableOpacity>
  );
}

export default SignupButton;

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
