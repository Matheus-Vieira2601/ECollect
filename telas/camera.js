import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

const MyCamera = ({ navigation }) => {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef.current) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(capturedPhoto)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.contentButtons}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <FontAwesome name="exchange" size={23} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View style={styles.contentModal}>
            <Text style={styles.modalText}>Essa sera a foto do seu perfil!</Text>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setOpen(false)
                
              }}
            >
              <Text style={styles.textButton}>Cancelar</Text>
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => {navigation.navigate('Products'), setOpen(false)}}
            
            >
              <Text style={styles.textButton}>Enviar</Text>
              
            </TouchableOpacity>
            <Image style={styles.imgPhoto} source={{ uri: capturedPhoto }} />
            
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  contentButtons: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  buttonCamera: {
    position: "absolute",
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#508D4F",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  buttonFlip: {
    position: "absolute",
    bottom: 50,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#508D4F",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
  },
  modalText: {
    fontSize:20,
    position: "absolute",
    top: 50,
    left: 50,
  },
  cancelButton: {
    width:"40%",
    height:"7%",
    position: "absolute",
    bottom: 10,
    left: 2,
    margin: 10,
    backgroundColor:"#508D4F",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50
  },
  sendButton:{
    width:"40%",
    height:"7%",
    position: "absolute",
    bottom: 10,
    right: 2,
    margin: 10,
    backgroundColor:"#508D4F",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50
  },
  textButton:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgPhoto: {
    width: "100%",
    height: 400,
  },
});

export default MyCamera;