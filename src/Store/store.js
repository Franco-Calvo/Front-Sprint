import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./Author/reducer";
import checkReducer from "./CheckAuthor/reducer";
import mangasReducer from "./MangasAuthor/reducer";
import alertReducer from "./Alert/reducer";
import textReducer from "./Text/reducer";
import eventReducer from "./Comic/reducer";
import checksReducer from "./Checks/reducer";
import mangaReducer from "./Manga/reducer";
import captureState from "./Capture/reducer";
import mymangasReducer from "./MyMangas/reducer";
import mangaidReducer from './MangaId/reducer'
import editDeleteChapter from './EditDeleteChapter/reducer';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    checkboxAuthor: checkReducer,
    Author: authorReducer,
    MangasAuthor: mangasReducer,
    text: textReducer,
    events: eventReducer,
    checks: checksReducer,
    mangas: mangaReducer,
    checked: captureState,
    editDeleteChapter: editDeleteChapter,
    mymanga: mymangasReducer,
    Mangaid: mangaidReducer,
  },
});
