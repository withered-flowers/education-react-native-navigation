import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

// ? [CARA LAMA]
// ? Props navigation di"suntik" dari Stack.Screen
const HomePage = () => {
  // ? [CARA BARU]
  // ? Gunakan useNavigation() dari "@react-navigation/native" untuk mendapatkan navigation
  const navigation = useNavigation();

  const buttonOnPressHandler = () => {
    // ? Buat pindah halaman gimana caranya?
    // ? Dengan menggunakan navigation.navigate("nama-dari-screen")
    // navigation.navigate("Kedua");

    // ? Misalnya ada suatu data tambahan yang mau dipassing
    navigation.navigate("Kedua", {
      dataTambahan: "Ini cuman iseng belaka",
    });
  };

  return (
    <View style={styles.container}>
      <Text>This is the Main Page</Text>
      <Button title="Pindah ke Another" onPress={buttonOnPressHandler} />
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
