import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_events = createAsyncThunk(
  "read_events",
  async ({ inputText, captureChecks, pages }) => {
    try {
      let response = await axios.get(
        "http://localhost:8080/mangas/view?title=" +
          inputText.trim() +
          "&category=" +
          captureChecks +
          "&page=" +
          pages
      );

      console.log(response);

      return {
        events: response.data.mangas,
      };
    } catch (error) {
      return {
        events: [],
      };
    }
  }
);

const actions = { read_events };
export default actions;
