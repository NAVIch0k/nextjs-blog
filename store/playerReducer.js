import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 50,
    pause: true
}

const PlayerReducer = createSlice({
    name: 'player',
    initialState,
    reducers: {
        playTrack(state) {
            state.pause = false
        },
        pauseTrack(state) {
            state.pause = true
        },
        setDuration(state, action) {
            state.duration = action.payload
        },
        setVolume(state, action) {
            state.volume = action.payload
        },
        setCurrentTime(state, action) {
            state.currentTime = action.payload
        },
        setActiveTrack(state, action) {
            state.active = action.payload
            state.duration = 0
            state.currentTime = 0
        }

    }
})

export const { pauseTrack, playTrack, setActiveTrack, setCurrentTime, setDuration, setVolume } = PlayerReducer.actions

export default PlayerReducer.reducer