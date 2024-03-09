import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { IInitialStateTodos, TypeEditTodo, TypeItems } from "./type";

export const initialState: IInitialStateTodos = {
  items: [],
  sortItems: [],

  count: 0,
  itemID: {
    id: 0,
    index: 0
  },
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    removeItems(state, action: PayloadAction<number>) {
      const result = state.items.filter((item) => item.id !== action.payload);
      state.items = result;
      state.sortItems = state.items;
    },

    addNewTodo(state, action: PayloadAction<TypeItems>) {
      const result = [action.payload, ...state.items];

      state.items = result;
      state.sortItems = state.items;
      localStorage.setItem("data", JSON.stringify(result));
    },

    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },

    filterItems(state, actions: PayloadAction<string>) {
      const sort = actions.payload;

      let itemsParse = JSON.parse(JSON.stringify(state.items))

      const sortItems = [...itemsParse].sort((a: any, b: any): number =>
        a[sort].localeCompare(b[sort]) 
      );

      state.items = sortItems;
      state.sortItems = state.items;
    },

    searchItem(state, action) {
      state.sortItems = [];

      const string = action.payload;

      if (string.length !== 0) {
        state.items.forEach((item) => {
          item.title.includes(action.payload) && state.sortItems.push(item);
        });
      } else {
        state.sortItems = state.items;
      }
    },

    changeTodo(state, action: PayloadAction<TypeEditTodo>){
      const items = JSON.parse(JSON.stringify(state.items))
      const index = state.itemID.index
      
      items[index].title = action.payload.title
      items[index].body = action.payload.body

      state.items = items
      state.sortItems = state.items
    },

    getID(state, action: PayloadAction<any>){
      state.itemID.id = action.payload.id
      state.itemID.index = action.payload.index
    }
  },
});

export const itemsSliceTodos = (state: RootState) => state.todoSlice

export const { removeItems, addNewTodo, setCount, filterItems, searchItem, changeTodo, getID } = todoSlice.actions;
export default todoSlice.reducer;
