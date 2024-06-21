import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {
    },
    loading: true
}

const ModelListSlice = createSlice({
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
        builder.addCase(getModelsByCategoryID.pending, (state) =>{
            state.loading = true
        });
        builder.addCase(getModelsByCategoryID.fulfilled, (state, action) => {
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
            .get(`${import.meta.env.VITE_API_URL}/Models`)
            .then(res => {
                console.log(res)
                return res.data
            })
            .catch(err => {
                console.log(err)
                return initialState
            })
    }
)

export const getModelsByCategoryID = createAsyncThunk(
    "model/getModelsByCategoryID",
    async (categoryID) => {
        return await axios
            .get(`${import.meta.env.VITE_API_URL}/Models/Category/${categoryID}`)
            .then(res => {
                console.log(res)
                return res.data
            })
            .catch(err => {
                console.log(err)
                return initialState
            })

    }
)

export const {

} = ModelListSlice.actions

export default ModelListSlice.reducer