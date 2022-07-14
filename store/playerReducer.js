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
        },
        setPrevTrack(state, action) {
            let track
            for (let i = 0; i < action.payload.tracks.length; i++) {
                if (action.payload.tracks[i].id == action.payload.active) {
                    track = action.payload.tracks[i - 1]
                    break
                }
            }
            if (track) {
                state.active = track
                state.duration = 0
                state.currentTime = 0
            }
        },
        setNextTrack(state, action) {
            let track
            for (let i = 0; i < action.payload.tracks.length; i++) {
                if (action.payload.tracks[i].id == action.payload.active) {
                    track = action.payload.tracks[i + 1]
                    break
                }
            }
            if (track) {
                state.active = track
                state.duration = 0
                state.currentTime = 0
            }
        }

    }
})

export const { pauseTrack, playTrack, setActiveTrack, setCurrentTime, setDuration, setVolume, setPrevTrack, setNextTrack } = PlayerReducer.actions

export default PlayerReducer.reducer