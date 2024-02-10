import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { IInitialStateImages, TypeImageState } from "./type";

const URL = "https://jsonplaceholder.typicode.com/photos?_limit=10"

export const fetchImages = createAsyncThunk("image/fetchImages", async () => {
  const { data } = await axios.get(`${URL}`);
  return data;
});

const initialState: IInitialStateImages = {
  items: [],
};

const imageSlice = createSlice({
  name: "image",
  initialState,

  reducers: {
    setImage(state, action) {
      state.items = action.payload;
    },

    removeItem(state, action) {
      const result = state.items.filter((item) => item.id !== action.payload);

      state.items = result;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, actions: PayloadAction<TypeImageState[]>) => {
      if(actions.payload){
        state.items = actions.payload;
      }
    })
  },
});

export const itemsSliceImages = (state: RootState) => state.imageSlice
export const { removeItem, setImage } = imageSlice.actions;
export default imageSlice.reducer;
