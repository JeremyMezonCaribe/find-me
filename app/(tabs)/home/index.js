import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

const Home = () => {
  const [image, setImage] = useState(
    "https://static.wikia.nocookie.net/worldtrigger/images/6/60/No_Image_Available.png/revision/latest?cb=20160405092229"
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBoxContainer}>
        <View style={styles.imageBox}>
          <Image
            source={image}
            style={{ width: 200, height: 200 }}
            onTouchEnd={pickImage}
          />
        </View>
        <Text style={styles.changeText}>Press the image to change it</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  imageBoxContainer: {
    alignItems: "center",
  },
  imageBox: {
    backgroundColor: "white",
    overflow: "hidden",
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  changeText: {
    color: "#A8A8A8",
    fontWeight: 600,
  },
});

export default Home;
