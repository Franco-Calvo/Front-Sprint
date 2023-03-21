import { createAction } from "@reduxjs/toolkit";

let open = createAction("open", ({ icon, title , type }) => {
  return {
    payload: {
      icon,
      title,
      type,
      visible: true,
    },
  };
});

let close = createAction("close", ({ icon, title }) => {
  return {
    payload: {
      icon,
      title,
      visible: false,
    },
  };
});

let responseAlert = createAction("responseAlert",({response})=>{
  return {
    payload:{
      response,
    }
  }
})

const alertActions = { open, close , responseAlert};

export default alertActions;
