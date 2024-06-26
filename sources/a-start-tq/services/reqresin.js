const BASE_URL = "https://reqres.in/api";

const getColors = async () => {
  const response = await fetch(`${BASE_URL}/unknown`);
  const responseJson = await response.json();

  return responseJson;
};

const getColorById = async (id) => {
  const response = await fetch(`${BASE_URL}/unknown/${id}`);
  const responseJson = await response.json();

  return responseJson;
};

export { getColors, getColorById };
