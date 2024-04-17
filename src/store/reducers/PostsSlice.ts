import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models";

interface PostState {
  posts: IPost[];
  loading: boolean;
  error: null | string;
}

const initialState = <PostState>{
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts(state) {
      state.loading = true;
    },

    fetchPostsSuccess(state, { payload }: PayloadAction<IPost[]>) {
      state.loading = false;
      state.posts = payload;
    },

    fetchPostsError(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default postsSlice.reducer;
