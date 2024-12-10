import { Provider } from "react-redux";
import store from "./app/store";

import AnotherPage from "./screens/AnotherPage";
import DetailedColors from "./screens/DetailedColors";
import DetailedCountry from "./screens/DetailedCountry";
import HomePage from "./screens/HomePage";
import ListAnime from "./screens/ListAnime";
import ListColors from "./screens/ListColors";
import ListCountry from "./screens/ListCountry";

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
