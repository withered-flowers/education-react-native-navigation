import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reqresinApi = createApi({
	reducerPath: "reqresinApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://reqres.in/api",
	}),
	endpoints: (builder) => ({
		getColors: builder.query({
			query: () => "/unknown",
		}),
		getColorById: builder.query({
			query: (id) => `unknown/${id}`,
		}),
	}),
});

export const { useGetColorsQuery, useGetColorByIdQuery } = reqresinApi;
