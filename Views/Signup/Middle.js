import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../../ui/TextInput";
import SignupButton from "../../ui/SignupButton";

function Middle() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = {
    firstname,
    lastname,
    email,
    password,
    confirmPassword
  }
  


  return (
    <View style={style.middleView}>
      <Input
        placeholder="Firstname"
        autoCompleteType="firstname"
        clearButtonMode="while-editing"
        selectionColor="#ffff"
        onChangeText={(firstname) => setFirstName(firstname)}
      />

      <Input
        placeholder="Lastname"
        autoCompleteType="lastname"
        clearButtonMode="while-editing"
        selectionColor="#ffff"
        onChangeText={(lastname) => setLastName(lastname)}
      />

      <Input
        placeholder="Email"
        autoCompleteType="email"
        clearButtonMode="while-editing"
        selectionColor="#ffff"
        onChangeText={(email) => setEmail(email)}
      />

      <Input
        placeholder="Password"
        autoCompleteType="password"
        clearButtonMode="while-editing"
        selectionColor="#ffff"
        onChangeText={(password) => setPassword(password)}
      />

      <Input
        placeholder="Confirm password"
        autoCompleteType="password"
        clearButtonMode="while-editing"
        selectionColor="#ffff"
        onChangeText={(confirmPassword) =>
          setConfirmPassword(confirmPassword)
        }
      />

     

      <SignupButton data = {data}>
        <Text style={style.signupText}>Sign up</Text>
      </SignupButton>
    </View>
  );
}

export default Middle;

const style = StyleSheet.create({
  middleView: {
    flex: 0.6,
  },
  signupText: {
    color: "#ffff",
    fontSize: "1.05rem",
  },
});
