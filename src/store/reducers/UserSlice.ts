import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models";

//Создание slice и описание его моделей

interface UserState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}

const initialState = <UserState>{
  users: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, { payload }: PayloadAction<IUser[]>) {
      state.loading = false;
      state.users = payload;
    },
    fetchUsersError(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
