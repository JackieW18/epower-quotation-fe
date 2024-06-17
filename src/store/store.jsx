import { configureStore } from '@reduxjs/toolkit'

import informationSliceReducer from './informationSlice'
import modelSlice from './modelSlice'

const store = configureStore({
  reducer: {
    information: informationSliceReducer,
    model: modelSlice
  }
})

export default store

