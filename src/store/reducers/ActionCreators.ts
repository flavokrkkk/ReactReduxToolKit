import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.fetchUsers());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setTimeout(() => {
      dispatch(userSlice.actions.fetchUsersSuccess(response.data));
    }, 300);
  } catch (err) {
    dispatch(
      userSlice.actions.fetchUsersError(`Произошла ошибка типа : ${err}`)
    );
  }
};
