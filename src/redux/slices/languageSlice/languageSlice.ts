import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ru  from '../../../static/localization/ru.json'
import en from '../../../static/localization/en.json'
import { IInitialStateLanguage } from "./type";

const initialState: IInitialStateLanguage = {
  languages: [
    {...ru},
    {...en}
  ],

  items: {
    ...en
  },
};

const languageSlice = createSlice({
  name: "language",
  initialState,

  reducers: {
    setLanguage (state, action: PayloadAction<string>) {
      const id = Number(action.payload)
      state.items = state.languages[id]
    }
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
