import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import SpecifiedView from "../components/SpecifiedView";
import { useGetTrendingAnimeQuery } from "../services/kitsu";

const ListAnime = () => {
	const { isLoading, data } = useGetTrendingAnimeQuery();

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
				data={data?.data}
				ItemSeparatorComponent={() => <SpecifiedView style={{ height: 10 }} />}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.textContainer}>
						<Text style={styles.text}>{item.attributes.canonicalTitle}</Text>
					</TouchableOpacity>
				)}
			/>
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

export default ListAnime;
