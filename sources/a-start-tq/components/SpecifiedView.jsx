import { Platform, SafeAreaView, View } from "react-native";

// SpecifiedView ini akan mengembalikan SafeAreaView bila menggunakan iOS
// dan akan mengembalikan View bila standard non-iOS
const SpecifiedView = ({ children, style }) => {
  return Platform.OS === "ios" ? (
    <SafeAreaView style={style}>{children}</SafeAreaView>
  ) : (
    <View style={style}>{children}</View>
  );
};

export default SpecifiedView;
