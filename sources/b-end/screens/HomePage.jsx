import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Main Page</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
