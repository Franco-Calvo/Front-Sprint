import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let CaptureChapters = createAsyncThunk(
    'captureCahapter',
    async ({ manga_id, page }) => {
        try {
            let response = await axios.get(`http://localhost:8080/chapters?manga_id=${manga_id}&page=${page}`)
            return {
                chapters: response.data.chapters//si la peticion se realiza ok
            }
        } catch (error) {
            return {
                chapters: []
            }
        }
    }
)
let CaptureManga = createAsyncThunk(
    'captureManga',
    async ({ manga_id}) => {
        try {
            let response = await axios.get(`http://localhost:8080/mangas/`+ manga_id )
            return {
                manga:response.data.manga
            }
        } catch (error) {
            return {
                manga: []
            }
        }
    }
)
const actions = { CaptureChapters, CaptureManga }

export default actions  