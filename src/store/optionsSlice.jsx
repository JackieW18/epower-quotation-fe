import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    loading: true
}

const response = {
    fields: [
        "Make & Model",
        "Type",
        "Load Capacity",
        "Load Center Distance",
        "Energy Type",
        "Mast",
        "Lift Height",
        "Collapse Height",
        "Fork Dimensions",
        "Battery",
        "Charger",
        "Standard Option"
    ],
    values: [
        "EP CQE15S",
        "Electric Walkie Reach",
        "1500kg @ 600mm Load Centre",
        "600mm",
        "Electric (Lithium-ion Battery)",
        "3 Stage Container Mast",
        "5500mm",
        "2460mm",
        "1070mm*100mm*40mm",
        "24V/205Ah",
        "24V/50A (Build-in Single Phase)",
        "Side Shift, Tilt Forklift, Turtle Speed, Proportional Lifting and Lowering, Electric Power Steering, Reach Distance 590mm, AC Zapi Controller."
    ]
}

const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changeSelection(state, action) {
            console.log(action.payload)
            state.data.category[action.payload.categoryIndex].selected = action.payload.index
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getOptions.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getOptions.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
    }
})

export const getOptions = createAsyncThunk(
    "model/getOptions",
    async (modelCode) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = JSON.parse(response);
        response.category.map((option) => {
            option.selected = 0
        })
        return response
    }
)

export const {
    changeSelection,
} = optionsSlice.actions

export default optionsSlice.reducer