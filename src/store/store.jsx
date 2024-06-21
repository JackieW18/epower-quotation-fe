import { configureStore } from '@reduxjs/toolkit'

import SaleInformationSliceReducer from './SaleInformationSlice'
import ModelReducer from './ModelSlice'
import ModelListReducer from './ModelListSlice'
import ModelCategoryReducer from './ModelCategorySlice'

const store = configureStore({
  reducer: {
    information: SaleInformationSliceReducer,
    model: ModelReducer,
    modelList: ModelListReducer,
    modelCategory: ModelCategoryReducer
  }
})

export default store

