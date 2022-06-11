import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = '/api/posts';

const USER_POSTS_URL = '/api/posts/user/'; //? '/api/posts/user/:username

/* const initialState = {
  allPosts: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  userPosts: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
}; */

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(POSTS_URL);
      return response.data.posts;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(POSTS_URL, { postData });
      return [...response.data.posts];
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* export const fetchUserPosts = createAsyncThunk(
  'posts/fetchUserPosts',
  async (username, thunkAPI) => {
    try {
      const response = await axios.get(`/api/posts/user/:${username}`, {
        headers: {},
      });
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
); */

// export const likePost

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log('Payload ', action.payload);
        state.posts = action.payload;
      });
    /*       .addCase(fetchUserPosts.pending, (state, action) => {
        state.userPosts.status = 'loading';
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.userPosts.status = 'succeeded';
        // Add fetched posts to the array
        console.log(' Fetch User Posts ', action.payload);
        state.userPosts.posts = state.userPosts.posts.concat(action.payload);
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.userPosts.status = 'failed';
        state.userPosts.error = action.error.message;
      }); */
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

/* export const selectAllPosts = (state) => state.posts.allPosts.posts;
export const getPostsStatus = (state) => state.posts.allPosts.status;
export const getPostsError = (state) => state.posts.allPosts.error;
 */

/* export const selectUserPosts = (state) => state.posts.userPosts.posts;
export const getUserPostsStatus = (state) => state.posts.userPosts.status;
export const getUserPostsError = (state) => state.posts.userPosts.error;
 */

export const selectUserPosts = (state, userId) =>
  state.posts.posts.filter((post) => post.user_id != userId);

export default postsSlice.reducer;
