import React from "react";
import {View, StyleSheet, ScrollView } from "react-native";
import Top from "../Views/Signup/Top";
import Middle from "../Views/Signup/Middle";
import Bottom from "../Views/Signup/Bottom";

function SignupForm({ navigation }) {
  return (
    //TODO pass navigation through context
    <View style={style.container}>
        <Top />
        <Middle navigation={navigation} />
        <Bottom navigation={navigation} />
    </View>
  );
}

export default SignupForm;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

});
