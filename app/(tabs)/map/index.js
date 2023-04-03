import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { defaultCoordinates } from "../../../config";

const Map = () => {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);

  return (
    <View>
      <MapView style={styles.map} region={coordinates}>
        <Marker
          key={1}
          coordinate={{ latitude: 18.485653, longitude: -69.936197 }}
          title={"Galeria 360"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
