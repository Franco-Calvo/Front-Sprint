import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions";

const { open, close ,responseAlert } = alertActions;
const initialState = {
  visible: false,
  icon: "succes",
  title: "",
  type:"",
  response:"",
};

let alertReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(open, (state, action) => {
      const newState = {
        ...state,
        visible: action.payload.visible,
        title: action.payload.title,
        icon: action.payload.icon,
        type: action.payload.type,
      };
      return newState;
    })
    .addCase(close, (state, action) => {
      const newState = {
        ...state,
        visible: action.payload.visible,
        text: action.payload.title,
        icon: action.payload.icon,
      };
      return newState;
    })
    .addCase(responseAlert,(state,action)=>{
      const newState={
        ...state,
        response: action.payload.response,
      }
      return newState
    }

    )
);

export default alertReducer;
