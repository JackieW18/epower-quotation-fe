import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {},
    loading: true,
    error: ""
}

const StandardOptionTypesSlice = createSlice({
    name: 'StandardOptionTypes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getStandardOptionTypes.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getStandardOptionTypes.fulfilled, (state, action) => {
            console.log(action.payload)
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getStandardOptionTypes.rejected, (state, action) =>{
            console.log(action.payload)
        })
    }
})

export const getStandardOptionTypes = createAsyncThunk(
    "standardOptions/getStandardOptionTypes",
    async (_, thunkAPI) => {
        return await axios
        .get(`${import.meta.env.VITE_API_URL}/StandardOption`)
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
} = StandardOptionTypesSlice.actions

export default StandardOptionTypesSlice.reducer