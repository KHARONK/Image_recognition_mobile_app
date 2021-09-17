import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { primaryColor, primaryFontColor } from "../../assets/color/color";

function Bottom({ navigation }) {
  return (
    <View style={style.bottomView}>
      <Text style={style.info}>Already have an account?</Text>
      <Text
        style={style.signupText}
        onPress={() => navigation.navigate("Login")}
      >
        {" "}
        Sign in
      </Text>
    </View>
  );
}

export default Bottom;

const style = StyleSheet.create({
  bottomView: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    padding: "30px",
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
