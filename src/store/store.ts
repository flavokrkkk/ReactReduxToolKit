import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";

export const rootReducer = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

//Получаем тип нашего состояния
export type RootState = ReturnType<typeof rootReducer>;

//Получаем тип нашего store
export type AppStore = ReturnType<typeof setupStore>;

//Получаем тип нашего dispatch
export type AppDispatch = AppStore["dispatch"];
