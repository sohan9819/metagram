import { apiSlice } from 'features/api/apiSlice';
import { createSlice } from '@reduxjs/toolkit';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['USER'],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = userApiSlice;
