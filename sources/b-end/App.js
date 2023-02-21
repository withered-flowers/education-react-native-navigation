import { NavigationContainer } from "@react-navigation/native";
// Pilih navigasi
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import icon
import Ionicons from "react-native-vector-icons/Ionicons";

import { Provider } from "react-redux";
import store from "./app/store";

import HomePage from "./screens/HomePage";
import AnotherPage from "./screens/AnotherPage";
import ListCountry from "./screens/ListCountry";
import DetailedCountry from "./screens/DetailedCountry";
import ListAnime from "./screens/ListAnime";

// createNativeStackNavigator adalah sebuah fungsi yang akan mengembalikan suatu Component
// Umumnya bernama Stack (ingat, ini Component, jadi PascalCase)
const Stack = createNativeStackNavigator();

// createBottomTabNavigator adalah sebuah fungsi yang akan mengembalikan suatu Component
// Umumnya bernama Tab (ingat sekali ini, ini Component, jadi PascalCase)
const Tab = createBottomTabNavigator();

const StackAnime = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List Country" component={ListCountry} />
      <Stack.Screen name="Detailed Country" component={DetailedCountry} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* (Stack.Navigator) Kita selipkan di sini */}
        {/* <Stack.Navigator>
          <Stack.Screen name="List Country" component={ListCountry} />
          <Stack.Screen name="Detailed Country" component={DetailedCountry} />
        </Stack.Navigator> */}

        {/* (Tab Navigator) Kita selipkan di sini */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Anime") {
                iconName = focused ? "cloud" : "cloud-outline";
              } else if (route.name === "Countries") {
                iconName = focused ? "map" : "map-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Anime" component={ListAnime} />
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name="Countries"
            component={StackAnime}
          />
        </Tab.Navigator>

        {/* <HomePage /> */}
        {/* <AnotherPage /> */}
        {/* <ListCountry /> */}
        {/* <DetailedCountry officialName={"Iceland"} /> */}
        {/* <ListAnime /> */}
      </NavigationContainer>
    </Provider>
  );
}
