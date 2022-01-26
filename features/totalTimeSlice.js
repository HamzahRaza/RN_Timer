import {createSlice} from '@reduxjs/toolkit'

export const totalTimeSlice = createSlice({
    name: 'totalTime',
    initialState: {
        minutes: 0
    }, 
    reducers: {
        add: (state, action) => {
            state.minutes += action.payload
        },
        reset: state => {
            state.minutes = 0
        },
    }
});


export const { add, reset} = totalTimeSlice.actions

export const selectTotalTime = state => state.totalTime.minutes

export default totalTimeSlice.reducer
