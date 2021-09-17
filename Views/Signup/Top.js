import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { primaryColor, primaryFontColor } from "../../assets/color/color";
import { titleFontSize } from "../../assets/dimensions/Dimensions";

function Top() {
    return (
        <View style={style.topView}>
          <Text style={style.title}>Hello!</Text>
          <Text style={style.signupText}>Sign up!</Text>
        </View>
    
    );
}

export default Top;

const style = StyleSheet.create({
  topView: {
    flex: 0.2,
    justifyContent: "center",
    padding: "30px",
  },

  title: {
    color: `${primaryColor}`,
    fontSize: `${titleFontSize}`,
  },

  signupText: {
    fontSize: "1.2rem",
    color: `${primaryFontColor}`,
  },
});
