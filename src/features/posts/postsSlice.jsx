import { apiSlice } from 'features/api/apiSlice';

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['POST'],
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ['POST'],
    }),
    getPostsByUsername: builder.query({
      query: (username) => `/posts/user/${username}`,
      providesTags: ['POST'],
    }),
    getComments: builder.query({
      query: (postId) => `/comments/${postId}`,
      providesTags: ['POST'],
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: { postData: post },
      }),
      invalidatesTags: ['POST'],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/posts/edit/${post._id}`,
        method: 'POST',
        body: { postData: post },
      }),
      invalidatesTags: ['POST'],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['POST'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetPostsByUsernameQuery,
  useGetCommentsQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postApiSlice;
