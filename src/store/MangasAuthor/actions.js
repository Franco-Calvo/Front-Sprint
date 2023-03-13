import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const read_mangas = createAsyncThunk(
  "read_mangas",
  async ({author_id, query}) => {
    try {
      let res = await axios.get(
        "http://localhost:8080/mangas/authors/" + author_id + "?new=" + query
      );
      return {mangas: res.data.data};
    } catch (error) {
      return {mangas: []};
    }
  }
);

const mangasActions = {read_mangas};
export default mangasActions;
