import { Tabs } from "expo-router";
import { Text } from "react-native";

const AppLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: () => <Text>🗺️</Text>,
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
