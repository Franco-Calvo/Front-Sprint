import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let captureChapters = createAsyncThunk(
    'captureCahapter',
    async ({ chapters }) => {
        try {
            let response = await axios.get('http://localhost:8080/mangas/' + chapters.trim())
            return {
                chapter: response//si la peticion se realiza ok
            }
        } catch (error) {
            return {
                chapter: []//cuando la peticion no se puso hacer
            }
        }
    }
)
const actions = { captureChapters }
export default actions  