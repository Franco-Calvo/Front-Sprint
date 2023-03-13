import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./Alert/reducer";
import textReducer from "./Text/reducer";
import eventReducer from './Events/reducer'

export const store = configureStore({
  reducer: {
    alert: alertReducer, //alert por ahora tiene 3 estados, visible, title y succes
    text: textReducer,
    events: eventReducer,
  },
});
