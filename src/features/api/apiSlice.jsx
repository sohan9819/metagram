import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', //optional
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));

      if (token) {
        headers.set('authorization', token);
      }

      return headers;
    },
  }),
  tagTypes: ['POST', 'USER', 'COMMENT'],
  endpoints: (builder) => ({}),
});
