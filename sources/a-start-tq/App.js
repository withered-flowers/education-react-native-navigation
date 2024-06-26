import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AnotherPage from "./screens/AnotherPage";
import DetailedColors from "./screens/DetailedColors";
import DetailedCountry from "./screens/DetailedCountry";
import HomePage from "./screens/HomePage";
import ListAnime from "./screens/ListAnime";
import ListColors from "./screens/ListColors";
import ListCountry from "./screens/ListCountry";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
      {/* <AnotherPage /> */}
      {/* <ListCountry /> */}
      {/* <ListColors /> */}
      {/* <DetailedColors colorId={1} /> */}
      {/* <DetailedCountry officialName={"Iceland"} /> */}
      {/* <ListAnime /> */}
    </QueryClientProvider>
  );
}
