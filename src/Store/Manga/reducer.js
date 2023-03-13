import { createReducer } from "@reduxjs/toolkit";
import chapterAction from './actions'
const { captureChapter } = chapterAction
const initialstate = {
    chapter: [] // el estado inicial es un array vacio
}

const reducer = createReducer(
    initialstate,
    (builder) => builder
        .addCase(
            captureChapter.fulfilled,
            (state, action) => {
                let newstate = {
                    ...state,//con los 3 puntos estoy haciendo una copia del estado
                    chapter: action.payload.chapter
                }
                return newstate
            }

        )
)
export default reducer  