import { configureStore } from "@reduxjs/toolkit";

import imageSlice from "./slices/imageSlice";
import todoSlice from "./slices/todoSlice";

import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    imageSlice,
    todoSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()