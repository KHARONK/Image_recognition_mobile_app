import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View , Platform} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { primaryFontColor } from "../../assets/color/color";
import { Camera } from "expo-camera";
import CameraPreview from "./CameraPreview";
import * as ImagePicker from 'expo-image-picker';

function CameraTab() {
  const [permission, setPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  let camera = Camera;

  function toggleCamera() {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  async function startCamera() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermission(status === "granted");
  }

  function retakePicture() {
    setCapturedImage(null);
    setPreviewVisible(false);
    startCamera();
  }

  async function startImagePicker() {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert('access to gallery denied');
      }
    }
  }

  async function openGallery() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    

    if (!result.cancelled) {
      setImage(result.uri);
      setPreviewVisible(true);
      setCapturedImage(result);
    }
  }

 

  useEffect(() => {
    (async () => {
      startCamera();
      startImagePicker();
    })();
  }, []);

  if (permission === null) {
    return <View />;
  }

  if (permission === false) {
    return <Text style={style.camText}>No access to camera</Text>;
  }

  async function snap() {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
      setPreviewVisible(true);
      setCapturedImage(photo);
    console.log(photo);
  }


  if (previewVisible && capturedImage) {
    return <CameraPreview photo={capturedImage} retakePicture = {retakePicture} />
  }

  return (
    <View style={style.container}>
      <Camera
        style={style.camera}
        type={type}
        flashMode="torch"
        autoFocus="on"
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={style.reverse}>
          <Ionicons
            name="ios-camera-reverse"
            size="2rem"
            color="#fff"
            onPress={() => toggleCamera()}
          />
        </View>

        <View style={style.reverse}>
          <Ionicons
            name="images"
            size="2rem"
            color="#fff"
            onPress={() => openGallery()}
            
          />
        </View>

        <View style={style.camIcons}>
          <View>
            <Ionicons
              name="ios-scan-circle-sharp"
              size="4rem"
              color="#ffff"
              onPress={() => snap()}
            />
          </View>
        </View>
      </Camera>
    </View>
  );
}

export default CameraTab;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: `${primaryFontColor}`,
  },
  camera: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
  },

  camText: {
    textAlign: "center",
  },

  camIcons: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  reverse: {
    alignSelf: "flex-end",
    marginRight: '5px',
  },

  gallery: {

  }
  
});
