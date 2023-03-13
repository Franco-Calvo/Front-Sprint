import actions from './actions'
import { createReducer } from "@reduxjs/toolkit"

const { captureChapter, captureManga } = actions

const initialstate = {
   manga:[],
   chapter:[]
}

const reducer = createReducer(
    initialstate,
    (builder) => builder
    .addCase(
        captureManga.fulfilled,
        (state,action)=> {
            console.log(action)
            let newstate={
                ...state,
                manga: action.payload.manga
            }
            return newstate
        }
    )
        .addCase(
            captureChapter.fulfilled,
            (state, action) => {
                console.log(action)
                let newstate = {
                    ...state,
                   chapters: action.payload.chapter
                }
                return newstate
            }
        )
)
export default reducer  