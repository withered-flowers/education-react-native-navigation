import { StyleSheet, Image, Text } from "react-native";
import SpecifiedView from "../components/SpecifiedView";

import { useQuery } from "@tanstack/react-query";
import { getColorById } from "../services/reqresin";

const DetailedColors = ({ colorId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["detailed-color"],
    queryFn: async () => await getColorById(colorId),
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
      <Text style={styles.headers}>{data.data.name}</Text>
      <Text style={styles.container}>
        Pantone Value: {data.data.pantone_value}
      </Text>
      <Text>Hex Value: {data.data.color}</Text>
      <Text>vvv Example vvv</Text>
      <Text style={{ color: data.data.color }}>
        The quick brown fox jumps over the lazy dog
      </Text>
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
    textTransform: "capitalize",
  },
  container: {
    paddingHorizontal: 16.0,
  },
  tinyLogo: {
    width: 64,
    height: 42,
  },
});

export default DetailedColors;
