import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
//lee todos los usuarios
const read_all_users = createAsyncThunk("read_all_users", async () => {
    try {
      let res = await axios.get("http://localhost:8080/users");
      console.log(res)
      return { user: res.data.users };
    } catch (error) {
      return { user: [] };
    }
  });
  
//actualiza las propiedades de user de true a false
  const update_user = createAsyncThunk(
    'update_user',
    async () => {
        try {
            let response = await axios.get('http://localhost:8080/users')
           // console.log(response)
            return {
                user_isAuthor: response.data.users.is_author,
                user_isCompany: response.data.users.is_company,
            }
        } catch (error) {
          return { is_author: false, is_company: false }
        }
    }
)


  const userActions = { read_all_users,update_user};
  export default userActions;