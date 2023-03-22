import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_author = createAsyncThunk("read_author", async ({ author_id }) => {
  try {
    let res = await axios.get("http://localhost:8080/authors/" + author_id);
    return { author: res.data.data };
  } catch (error) {
    return { author: [] };
  }
});

const update_author = createAsyncThunk(
  'update_author',
  async ({ data }) => {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = 'http://localhost:8080/authors/me'
    try {
      let response = await axios.put(url, data, headers)
      //console.log(response.data);
      return {
        author: response.data.author
      }

    } catch (error) {
      console.log(error);
      return {
        author: []
      }
    }
  }
)

const authorActions = { read_author, update_author};
export default authorActions;
