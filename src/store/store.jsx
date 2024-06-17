import { configureStore } from '@reduxjs/toolkit'

import informationSliceReducer from './informationSlice'
import modelSlice from './modelSlice'
import modelListSlice from './modelListSlice'

const store = configureStore({
  reducer: {
    information: informationSliceReducer,
    model: modelSlice,
    modelList: modelListSlice
  }
})

export default store

