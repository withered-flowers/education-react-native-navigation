import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useGetCountriesByNameQuery } from "../services/restcountry";
import SpecifiedView from "../components/SpecifiedView";

// Di sini untuk bisa menerima parameter, maka cukup menerima sebuah props dengan nama "route"
// Karena di sini kita juga ingin bisa kembali ke halaman sebelumnya, kita bisa menggunakan navigation
const DetailedCountry = ({ route, navigation }) => {
  // Di dalam route, ini adalah sebuah Object, di mana salah satu propsnya adalah "params"

  // Karena params bisa banyak, umumnya dalam object, jadi bisa di-destructuring
  // Ingat, karena namanya adalah "officialName", maka kita destructuring "officialName"
  const { officialName } = route.params;

  // Dan selebihnya masih sama saja
  const { data, isLoading } = useGetCountriesByNameQuery(officialName);

  const buttonOnPressHandler = () => {
    // Di sini kita akan menggunakan goBack
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <SpecifiedView style={styles.centerContainer}>
        <Text>Loading ...</Text>
      </SpecifiedView>
    );
  }

  return (
    <SpecifiedView style={styles.centerContainer}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: data[0].flags.png,
        }}
      />
      <Text style={styles.headers}>{data[0].name.official}</Text>
      <Text style={styles.container}>
        Geolocation: {data[0].latlng[0]} , {data[0].latlng[1]}
      </Text>
      <Text>Capital: {data[0].capital[0]}</Text>
      <Text>Region: {data[0].region}</Text>
      <Text>SubRegion: {data[0].subregion}</Text>

      <TouchableOpacity onPress={buttonOnPressHandler}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SpecifiedView>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    padding: 8.0,
    paddingHorizontal: 16.0,
    fontSize: 24.0,
  },
  container: {
    paddingHorizontal: 16.0,
  },
  tinyLogo: {
    width: 64,
    height: 42,
  },
});

export default DetailedCountry;
