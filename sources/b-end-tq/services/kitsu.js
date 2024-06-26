const BASE_URL = "https://kitsu.io/api/edge";

const getTrendingAnime = async () => {
  const response = await fetch(`${BASE_URL}/trending/anime`);
  const responseJson = await response.json();

  return responseJson;
};

export { getTrendingAnime };
