import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureId = createAsyncThunk("captureId", async ({ manga_id }) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/mangas/` + manga_id
    );

    return {
      manga: response.data.manga,
    };
  } catch (error) {
    console.log(error);
    return {
      manga: [],
    };
  }
});

const actions = { captureId };
export default actions;
