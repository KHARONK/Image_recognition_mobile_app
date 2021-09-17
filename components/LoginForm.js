import React from "react";
import { View, StyleSheet, ScrollView} from "react-native";
import Top from "../Views/Login/Top";
import Middle from "../Views/Login/Middle";
import Bottom from "../Views/Login/Bottom";


function LoginForm({navigation}) {
  return (
    //TODO pass navigation through context
    <View style={style.container}>
        <Top />
        <Middle navigation={navigation} />
        <Bottom navigation={navigation} />
    </View>
  );
}

export default LoginForm;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

});
