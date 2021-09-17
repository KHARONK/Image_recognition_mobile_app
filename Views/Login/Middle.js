import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { primaryFontColor } from "../../assets/color/color";
import {
  textInputMarginRight,
} from "../../assets/dimensions/Dimensions";
import Input from "../../ui/TextInput";
import LoginButton from "../../ui/LoginButton";


function Middle({ navigation }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data ={email, password}
    return (
      <View style={style.middleView}>
        <Input
          placeholder="Email"
          autoCompleteType="email"
          clearButtonMode="while-editing"
          selectionColor="#ffff"
          onChangeText = {(email) => setEmail(email)}
        />

        <Input
          placeholder="Password"
          autoCompleteType="password"
          clearButtonMode="while-editing"
          selectionColor="#ffff"
          onChangeText = {(password) => setPassword(password)}
        />

        <Text style={style.forgotPassword}>forgot password?</Text>

        <LoginButton navigation={navigation} data = {data}>
          <Text style={style.loginText}>Login</Text>
        </LoginButton>
      </View>
    );
}

export default Middle;

const style = StyleSheet.create({
  middleView: {
    flex: 0.6,
    justifyContent: "center",
  },

  forgotPassword: {
    textAlign: "right",
    marginRight: `${textInputMarginRight}`,
    padding: "10px",
    color: `${primaryFontColor}`,
  },

  loginText: {
    color: "#ffff",
    fontSize: "1.05rem",
  },
});
