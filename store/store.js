import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import playerReducer from "./playerReducer";
import tracksReducer from "./tracksReducer";

let reducers = combineReducers({
    player: playerReducer,
    tracks:tracksReducer
})

const makeStore = () => configureStore({ reducer: reducers })

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });