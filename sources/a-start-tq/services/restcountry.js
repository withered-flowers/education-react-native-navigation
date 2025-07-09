const BASE_URL = "https://restcountries.com/v3.1";

const getAllCountries = async () => {
  const response = await fetch(
    `${BASE_URL}/all?fields=capital,flags,latlng,name,region,subregion`
  );
  const responseJson = await response.json();

  return responseJson;
};

const getCountriesByName = async (name) => {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  const responseJson = await response.json();

  return responseJson;
};

export { getAllCountries, getCountriesByName };
