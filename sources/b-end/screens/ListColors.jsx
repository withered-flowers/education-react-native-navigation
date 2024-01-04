import { useGetColorsQuery } from "../services/reqresin";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import SpecifiedView from "../components/SpecifiedView";

const ListColors = ({ navigation }) => {
  const { data, isLoading } = useGetColorsQuery();

  const textOnPress = (colorId) => {
    console.log(colorId);

    navigation.navigate("Detailed Color", {
      colorId,
    });
  };

  if (isLoading) {
    return (
      <SpecifiedView style={styles.container}>
        <Text>Loading ...</Text>
      </SpecifiedView>
    );
  }

  return (
    <SpecifiedView>
      <FlatList
        style={styles.container}
        data={data.data}
        ItemSeparatorComponent={() => <SpecifiedView style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => textOnPress(item.id)}
          >
            <Text style={styles.text}>
              <Text style={styles.textUpperCase}>{item.name}</Text> -{" "}
              <Text style={{ color: item.color }}>{item.color}</Text>
            </Text>
          </TouchableOpacity>
        )}
      ></FlatList>
      <StatusBar style="auto" />
    </SpecifiedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8.0,
    paddingHorizontal: 16.0,
  },
  textContainer: {
    padding: 16.0,
    backgroundColor: "#26C6DA",
    borderRadius: 8.0,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16.0,
  },
  textUpperCase: {
    textTransform: "capitalize",
  },
});

export default ListColors;
