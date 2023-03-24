import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const captureAllChapter = createAsyncThunk(
    'captureAllChapter',
    async ({ manga_id }) => {
        try {
            let response = await axios.get("http://localhost:8080/chapters?manga_id=" + manga_id )
            return { chapters: response.data.allChapter }
        } catch (error) {
            return { chapters: [] }
        }
    }
)
let captureManga = createAsyncThunk(
    'captureManga',
    async ({ manga_id }) => {
        try {
            let response = await axios.get(`http://localhost:8080/mangas/` + manga_id)
            return {manga: response.data.manga}
        } catch (error) {
            console.log(error)
            return {manga: []}
        }
    }
)
const actions = { captureAllChapter , captureManga }

export default actions  