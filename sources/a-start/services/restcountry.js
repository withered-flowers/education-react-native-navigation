import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restcountryApi = createApi({
  reducerPath: "restcountryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `all/`,
    }),
    getCountriesByName: builder.query({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountriesByNameQuery } =
  restcountryApi;
