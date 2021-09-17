import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primaryColor, primaryFontColor } from "../../assets/color/color";
import { titleFontSize } from "../../assets/dimensions/Dimensions";

function Top() {
  return (
    <View style={style.topView}>
      <Text style={style.title}>Welcome back!</Text>
      <Text style={style.signinText}>Sign in!</Text>
    </View>
  );
}

export default Top;

const style = StyleSheet.create({
  topView: {
    flex: 0.2,
    justifyContent: "center",
    padding: "30px",
    opacity: 2
  },

  title: {
    color: `${primaryColor}`,
    fontSize: `${titleFontSize}`,
  },

  signinText: {
    fontSize: "1.2rem",
    color: `${primaryFontColor}`,
  },
});
