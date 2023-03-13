import {configureStore} from "@reduxjs/toolkit";
import authorReducer from "./Author/reducer";
import checkReducer from "./CheckAuthor/reducer";

export const store = configureStore({
  reducer: {
    checkboxAuthor: checkReducer,
    Author: authorReducer,
  },
});
