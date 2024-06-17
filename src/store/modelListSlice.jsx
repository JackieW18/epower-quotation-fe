import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {
    },
    loading: true
}

const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllModels.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getAllModels.fulfilled, (state, action) => {
            console.log("complete", action.payload)
            state.data = action.payload
            state.loading = false
        });
    }
})

export const getAllModels = createAsyncThunk(
    "model/getAllModels",
    async () => {
        return await axios
        .get('http://localhost:5000/Models')
        .then(res =>{
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
            return initialState
        })
    }
)

export const getModelsByType = createAsyncThunk(
    "model/getModelsByType",
    async (modelCode) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = JSON.parse(res);

        response.optionsCategories.map((option) => {
            option.selected = 0
        })
        response.modelCode = modelCode
        return response
    }
)

export const {
    changeSelection
} = modelSlice.actions

export default modelSlice.reducer