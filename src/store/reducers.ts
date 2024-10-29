import { combineReducers } from '@reduxjs/toolkit'
import {counterSlice} from './counter/slice.ts'

export const reducers = combineReducers({
  counter: counterSlice.reducer,
})

export default reducers

// export type TAppReducer = ReturnType<typeof reducers>
