import { StyleSheet, Image, Text } from "react-native";
import SpecifiedView from "../components/SpecifiedView";

import { useQuery } from "@tanstack/react-query";
import { getCountriesByName } from "../services/restcountry";

const DetailedCountry = ({ officialName }) => {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["detailed-country"],
    queryFn: async () => await getCountriesByName(officialName),
  });

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
