import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: null | string;
}

const initialState = <UserState>{
  users: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
  },
});

export default userSlice.reducer;
