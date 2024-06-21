import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {
    },
    loading: true
}

const ModelCategorySlice = createSlice({
    name: 'model',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getModelCategories.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getModelCategories.fulfilled, (state, action) => {
            console.log(action.payload)
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getModelCategories.rejected, (state, action) =>{
            console.log(action.payload)
        })
    }
})

export const getModelCategories = createAsyncThunk(
    "model/getModelCategories",
    async (params, thunkAPI) => {
        return await axios
        .get(`${import.meta.env.VITE_API_URL}/ModelCategories`)
        .then(res =>{
            return res.data
        })
        .catch(err => {
            console.log(err)
            return thunkAPI.rejectWithValue("Something went wrong")
        })
    }
)

export const {
} = ModelCategorySlice.actions

export default ModelCategorySlice.reducer