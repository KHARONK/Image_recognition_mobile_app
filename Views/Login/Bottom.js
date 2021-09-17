import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primaryColor, primaryFontColor } from "../../assets/color/color";

function Bottom({navigation}) {
  return (
    <View style={style.bottomView}>
      <Text style={style.info}>Dont have an account?</Text>
      <Text style={style.signupText} onPress={() => navigation.navigate('Signup')}> Signup</Text>
    </View>
  );
}

export default Bottom;

const style = StyleSheet.create({
  bottomView: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
  },

  info: {
    fontSize: "1rem",
    color: `${primaryFontColor}`,
  },

  signupText: {
    color: `${primaryColor}`,
    fontSize: "1rem",
  },
});
