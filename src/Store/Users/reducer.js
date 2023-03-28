import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'
const { read_all_users, update_user } = actions

const initiateState = {
    user_isAuthor: false,
    user_isCompany: false,
    users: [],
}
const reducer = createReducer(
    initiateState,
    (builder) => builder
        .addCase(
            initiateState,
            read_all_users.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    users: action.payload.users
                }
                return newState
            }
        )
        .addCase(
            update_user.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    author: action.payload.User,
                    company: action.payload.User,
                }
                return newState
            }
        )
)

export default reducer