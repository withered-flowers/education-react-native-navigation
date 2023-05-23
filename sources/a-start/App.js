import { Provider } from "react-redux";
import store from "./app/store";

import HomePage from "./screens/HomePage";
import AnotherPage from "./screens/AnotherPage";
import ListCountry from "./screens/ListCountry";
import DetailedCountry from "./screens/DetailedCountry";
import ListColors from "./screens/ListColors";
import ListAnime from "./screens/ListAnime";
import DetailedColors from "./screens/DetailedColors";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
      {/* <AnotherPage /> */}
      {/* <ListCountry /> */}
      {/* <ListColors /> */}
      {/* <DetailedColors colorId={1} /> */}
      {/* <DetailedCountry officialName={"Iceland"} /> */}
      {/* <ListAnime /> */}
    </Provider>
  );
}
