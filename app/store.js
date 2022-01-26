import { configureStore } from '@reduxjs/toolkit'
import totalTimeReducer from '../features/totalTimeSlice'

export default configureStore({
  reducer: {
    totalTime: totalTimeReducer
  }
})