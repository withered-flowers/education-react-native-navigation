import { Provider } from "react-redux";
import store from "./app/store";

import HomePage from "./screens/HomePage";
import AnotherPage from "./screens/AnotherPage";
import ListCountry from "./screens/ListCountry";
import DetailedCountry from "./screens/DetailedCountry";
import ListAnime from "./screens/ListAnime";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
      {/* <AnotherPage /> */}
      {/* <ListCountry /> */}
      {/* <DetailedCountry officialName={"Iceland"} /> */}
      {/* <ListAnime /> */}
    </Provider>
  );
}
