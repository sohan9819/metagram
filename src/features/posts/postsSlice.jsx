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
    likePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/like/${postId}`,
        method: 'POST',
      }),
    }),
    dislikePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/dislike/${postId}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetPostsByUsernameQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postApiSlice;
