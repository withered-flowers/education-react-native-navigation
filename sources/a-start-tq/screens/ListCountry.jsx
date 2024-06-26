import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import SpecifiedView from "../components/SpecifiedView";

import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../services/restcountry";

const ListCountry = () => {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  const textOnPress = (officialName) => {
    console.log(officialName);
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
        data={data}
        ItemSeparatorComponent={() => <SpecifiedView style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => textOnPress(item.name.official)}
          >
            <Text style={styles.text}>
              {item.name.official} - ({item.latlng[0].toFixed(2)},{" "}
              {item.latlng[1].toFixed(2)})
            </Text>
          </TouchableOpacity>
        )}
      />
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
});

export default ListCountry;
