import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// ? Terima data tambahan dari si Home, via props namanya route
const AnotherPage = ({ route }) => {
  const navigation = useNavigation();

  // ? Baca data yang diterima via "params"
  // ? Pasti adalah suatu Object
  const { dataTambahan } = route.params;

  const buttonOnPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>This is Another Page - {dataTambahan}</Text>
      <Button title="Balik ke Home" onPress={buttonOnPressHandler} />
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

export default AnotherPage;
