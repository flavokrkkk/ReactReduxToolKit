import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
//Создание хуков для упрощения работы

//Хук типизированного useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

//Хук типизированного useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = () =>
  useSelector;
