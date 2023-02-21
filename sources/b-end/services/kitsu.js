import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kitsuApi = createApi({
  reducerPath: "kitsuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kitsu.io/api/edge/",
  }),
  endpoints: (builder) => ({
    getTrendingAnime: builder.query({
      query: () => `trending/anime`,
    }),
  }),
});

export const { useGetTrendingAnimeQuery } = kitsuApi;
