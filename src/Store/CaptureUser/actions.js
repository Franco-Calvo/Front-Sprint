import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureUser =createAsyncThunk("captureUser",
async()=>{
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = "http://localhost:8080/auth/user";
    try {
        let res = await axios.get(url, headers);
        return { user: res.data.data}
    } catch (error) {
        return {user:[]}
    }
    
})
const actions = { captureUser }

export default actions 