import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import playerReducer from "./playerReducer";

let reducers = combineReducers({
    player: playerReducer
})

const makeStore = () => configureStore({ reducer: reducers })

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });