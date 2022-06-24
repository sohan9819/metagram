import { apiSlice } from 'features/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['USER'],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ['USER'],
    }),
    getBookmarks: builder.query({
      query: () => `/users/bookmark`,
      providesTags: ['USER'],
    }),
    addBookmark: builder.mutation({
      query: (postId) => ({
        url: `/users/bookmark/${postId}`,
        method: 'POST',
      }),
      invalidatesTags: ['USER'],
    }),
    removeBookmark: builder.mutation({
      query: (postId) => ({
        url: `/users/remove-bookmark/${postId}`,
        method: 'POST',
      }),
      invalidatesTags: ['USER'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} = userApiSlice;
