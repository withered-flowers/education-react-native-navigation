import { useGetAllCountriesQuery } from "../services/restcountry";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import SpecifiedView from "../components/SpecifiedView";

// Sekarang di Props ini kita bisa menerima sebuah props bernama "navigation"
// "navigation" adalah sebuah object yang digunakan untuk berpindah halaman
const ListCountry = ({ navigation }) => {
  const { data, isLoading } = useGetAllCountriesQuery();

  const textOnPress = (officialName) => {
    // Ingin pindah ke Detailed Country
    console.log(officialName);

    // Sekarang kita bisa pindah dengan menggunakan fungsi navigate yang dibawa oleh navigation
    // Tapi bila begini saja, maka akan error !
    // Karena navigasi ke Detailed Country, membutuhkan suatu props untuk mencomot datanya
    // (si officialName)
    // navigation.navigate("Detailed Country");

    // Berarti sekarang kita harus navigasi, namun dengan memberikan parameter !
    // Parameter diberikan lewat 2nd args di fungsi navigate
    navigation.navigate("Detailed Country", {
      // Misalnya di sini kita berikan nama parameter adalah "officialName"
      // dan valuenya adalah "officialName" dari textOnPress

      // Sekarang kita harus mengubah di DetailedCountry.jsxnya
      // untuk bisa menerima params tersebut
      officialName,
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
});

export default ListCountry;
