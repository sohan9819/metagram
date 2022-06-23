import { apiSlice } from 'features/api/apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (postId) => `/comments/${postId}`,
      providesTags: ['COMMENT'],
    }),
    addComment: builder.mutation({
      query: ({ postId, commentData }) => ({
        url: `/comments/add/${postId}`,
        method: 'POST',
        body: { commentData },
      }),
      invalidatesTags: ['COMMENT'],
    }),
    editComment: builder.mutation({
      query: ({ postId, commentId, commentData }) => ({
        url: `/comments/edit/${postId}/${commentId}`,
        method: 'POST',
        body: {
          commentData,
        },
      }),
      invalidatesTags: ['COMMENT'],
    }),
    upVoteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `/comments/upvote/${postId}/${commentId}`,
        method: 'POST',
      }),
      invalidatesTags: ['COMMENT'],
    }),
    downVoteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `/comments/downvote/${postId}/${commentId}`,
        method: 'POST',
      }),
      invalidatesTags: ['COMMENT'],
    }),
    deleteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `comments/delete/${postId}/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['COMMENT'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useEditCommentMutation,
  useDeleteCommentMutation,
  useUpVoteCommentMutation,
  useDownVoteCommentMutation,
} = commentApiSlice;
