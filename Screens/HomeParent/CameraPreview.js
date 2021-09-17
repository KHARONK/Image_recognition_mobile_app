import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { primaryColor } from "../../assets/color/color";
import axios from 'axios';



function CameraPreview({ photo, retakePicture }) {

  const encoded = Buffer.from(photo.uri).toString(
    'base64'
  )
  
  const data = {
    image: encoded
  }

  function sendToCloud() {
    console.log(photo.uri);
    axios.post('http://localhost:5000/api/predict', data)
      .then((response) => console.log(response))
      .catch((error) => alert(error.response.data.details));
  }
  return (
    <View style={style.container}>
      <ImageBackground style={style.image} source={{ uri: photo && photo.uri }}>
        <View style={style.upload}>
          <Ionicons
            name="cloud-upload-sharp"
            size="4rem"
            color={`${primaryColor}`}
            onPress={() => sendToCloud()}
          />
        </View>

        <View style={style.retake}>
          <Ionicons
            name="close"
            size="2rem"
            color={`${primaryColor}`}
            onPress={() => retakePicture()}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default CameraPreview;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    height: "100%",
  },
  upload: {},

  retake: {
    alignSelf: "flex-end",
  },
});
