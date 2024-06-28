import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {},
    loading: true,
    error: ""
}

const ModelListSlice = createSlice({
    name: 'modelList',
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
        builder.addCase(getAllModels.rejected, (state, action) => {
            state.loading=true
            state.error=action.payload
        });
        builder.addCase(getModelsByCategoryID.pending, (state) =>{
            state.loading = true
        });
        builder.addCase(getModelsByCategoryID.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getModelsByCategoryID.rejected, (state, action) => {
            state.loading=true
            state.error=action.payload
        });
    }
})

export const getAllModels = createAsyncThunk(
    "model/getAllModels",
    async (param, thunkAPI) => {
        return await axios
            .get(`${import.meta.env.VITE_API_URL}/Models`)
            .then(res => {
                console.log(res)
                return res.data
            })
            .catch(err => {
                return thunkAPI.rejectWithValue(err.message)
            })
    }
)

export const getModelsByCategoryID = createAsyncThunk(
    "model/getModelsByCategoryID",
    async (categoryID, thunkAPI) => {
        return await axios
            .get(`${import.meta.env.VITE_API_URL}/ModelCategories/${categoryID}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return thunkAPI.rejectWithValue(err.message)
            })

    }
)

export const {

} = ModelListSlice.actions

export default ModelListSlice.reducer
