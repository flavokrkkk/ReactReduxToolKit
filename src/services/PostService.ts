//Работа с RTKquery и запросами

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
  reducerPath: "postAPI", // уникальный ключ определяющий текущий сервис
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: () => ({
        url: `/posts`,
      }),
    }),
  }),
});
