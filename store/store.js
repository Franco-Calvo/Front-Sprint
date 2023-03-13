import { configureStore } from '@reduxjs/toolkit'
import chapterReducer from './Manga/reducer'

export const store = configureStore({
    reducer: {
        chapter: chapterReducer,
    }
})
