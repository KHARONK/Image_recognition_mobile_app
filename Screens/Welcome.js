import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { primaryColor, loginButtonTextColor, primaryFontColor } from "../assets/color/color";
import {
  welcomeButtonPadding,
  welcomeButtonMargin,
  titleFontSize
} from "../assets/dimensions/Dimensions";

import { welcome } from "../assets/images/image";

function Welcome({navigation}) {
  return (
    <View style={style.container}>
      <ImageBackground style={style.image} source={welcome}>
        <View style={style.topView}>
          <Text style={style.title}>Welcome!</Text>
          <Text style={style.text}>
            to adinkra zone for all your adinkra symbols and many more
          </Text>
        </View>

        <View style={style.bottomView}>
          <TouchableOpacity
            style={style.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={style.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.signupButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={style.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  topView: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },

  title: {
    fontSize: `${titleFontSize}`,
    color: `${primaryColor}`,
  },
  image: {
    flex: 1,
  },

  text: {
    fontSize: "1.05rem",
  },

  bottomView: {
    flex: 0.4,
    justifyContent: "center",
  },

  loginButton: {
    alignItems: "center",
    backgroundColor: `${primaryColor}`,
    padding: `${welcomeButtonPadding}`,
    margin: `${welcomeButtonMargin}`,
    borderRadius: "10px",
  },

  loginText: {
    color: `${loginButtonTextColor}`,
    fontSize: "1.05rem",
  },

  signupButton: {
    alignItems: "center",
    backgroundColor: "#ffff",
    padding: `${welcomeButtonPadding}`,
    margin: `${welcomeButtonMargin}`,
    borderRadius: "10px",
  },

  signupText: {
    color: `${primaryColor}`,
    fontSize: "1.05rem",
  },
});
