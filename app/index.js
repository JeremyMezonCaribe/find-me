import { Redirect } from "expo-router";
import { Pressable, TextInput, Text, View, StyleSheet } from "react-native";

const Index = () => {
  const loggin = () => {
    return <Redirect href="/home" />;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Find Me!</Text>
        <View style={styles.inputLogin}>
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="Username"
            placeholderTextColor={"#C3C3C3"}
          />
        </View>
        <View style={styles.inputLogin}>
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="Password"
            placeholderTextColor={"#C3C3C3"}
          />
        </View>
        <View>
          <Pressable style={styles.btnLogin} onPress={loggin}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Let me In!
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                textAlign: "center",
                color: "#29B1CC",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              I want to registrer
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: 600,
    marginBottom: 50,
    color: "#4DDCF8",
    textAlign: "center",
  },
  inputLogin: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
    fontSize: 21,
    height: 30,
  },
  btnLogin: {
    backgroundColor: "#29B1CC",
    padding: 15,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 20,
  },
});

export default Index;
