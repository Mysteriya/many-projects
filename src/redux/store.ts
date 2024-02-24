import { configureStore } from "@reduxjs/toolkit";

import imageSlice from "./slices/imageSlice/imageSlice";
import todoSlice from "./slices/todoSlice/todoSlice";
import languageSlice from './slices/languageSlice/languageSlice'

import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    imageSlice,
    todoSlice,
    languageSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()