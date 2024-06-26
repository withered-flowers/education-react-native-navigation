import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AnotherPage from "./screens/AnotherPage";
import DetailedColors from "./screens/DetailedColors";
import DetailedCountry from "./screens/DetailedCountry";
import HomePage from "./screens/HomePage";
import ListAnime from "./screens/ListAnime";
import ListColors from "./screens/ListColors";
import ListCountry from "./screens/ListCountry";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

const queryClient = new QueryClient();

// ini akan mengembalikan suatu Object
// - Screen
// - Navigator
// Keduanya adalah Functional Component
const Stack = createNativeStackNavigator();

// ? Sama dengan si Stack
const Tab = createBottomTabNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pertama"
      screenOptions={{
        headerShown: true,
      }}
    >
      {/* // ! Perhatikan di sini yang dimasukkin ke component adalah Function-nya ! */}
      <Stack.Screen
        name="Pertama"
        component={HomePage}
        options={{
          title: "Rumah",
        }}
      />
      <Stack.Screen name="Kedua" component={AnotherPage} />
    </Stack.Navigator>
  );
};

const StackScreenCountry = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListCountries" component={ListCountry} />
      <Stack.Screen name="DetailCountry" component={DetailedCountry} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <HomePage /> */}
        {/* <AnotherPage /> */}
        {/* <ListCountry /> */}
        {/* <ListColors /> */}
        {/* <DetailedColors colorId={1} /> */}
        {/* <DetailedCountry officialName={"Iceland"} /> */}
        {/* <ListAnime /> */}

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Countries") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Colors") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Rumahkedua"
            component={StackScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Countries"
            component={StackScreenCountry}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name="Colors" component={ListColors} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
