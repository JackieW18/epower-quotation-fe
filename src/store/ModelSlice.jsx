import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {},
    loading: true,
    error: ""
}

const res = JSON.stringify({
    "model": {
        "modelCode": "EFL181",
        "price": 21705,
        "type": "Four-Wheel Electirc Forklift",
        "energyType": "Electric (Lithium-ion Battery)",
        "loadCapacity": 1800,
        "loadCenterDistance": 600,
        "other": {
            fields: [
                "Mast",
                "Lift Height",
                "Collapse Height",
                "Fork Dimensions",
                "Battery",
                "Charger",
                "Standard Option"
            ],
            values: [
                "3 Stage Container Mast",
                "5500mm",
                "2460mm",
                "1070mm*100mm*40mm",
                "24V/205Ah",
                "24V/50A (Build-in Single Phase)",
                "Side Shift, Tilt Forklift, Turtle Speed, Proportional Lifting and Lowering, Electric Power Steering, Reach Distance 590mm, AC Zapi Controller."
            ]
        }

    },
    "optionsCategories": [
        {
            "name": "Mast",
            "options": [
                {
                    "description": "Triplex Mast, Lifting Height 4350mm",
                    "specification": "Triplex Mast, Lifting Height 4350mm",
                    "price": 0,
                },
                {
                    "description": "Triplex Mast, Lifting Height 4500mm",
                    "specification": "Triplex Mast, Lifting Height 4500mm",
                    "price": 0,
                },
                {
                    "description": "Triplex Mast, Lifting Height 4800mm",
                    "specification": "Triplex Mast, Lifting Height 4800mm",
                    "price": 0,
                }
            ]
        },
        {
            "name": "Battery",
            "options": [
                {
                    "description": "150ah Lithium Battery",
                    "specification": "150ah",
                    "price": 0
                },
                {
                    "description": "205ah Lithium Battery",
                    "specification": "205ah",
                    "price": 1380
                }
            ]
        },
        {
            "name": "Charger",
            "options": [
                {
                    "description": "Charger 48V/50A (On-board, Single phase, 15A plug) ",
                    "specification": "48V/50A, On-board, Single phase, 15A plug",
                    "price": 0
                },
                {
                    "description": "Charger 48V/30A (On-board, Single phase, 10A plug) ",
                    "specification": "48V/30A, On-board, Single phase, 10A plug",
                    "price": 0
                },
            ],
        },
        {
            "name": "Sideshift",
            "options": [
                {
                    "description": "Integrated Sideshift",
                    "specification": "Integrated Sideshift",
                    "price": 0
                },
                {
                    "description": "Cascade Sideshift (Hook-on)",
                    "specification": "Cascade Sideshift (Hook-on)",
                    "price": 0
                },
                {
                    "description": "Cascade Sideshift (Hook-on) & Fork Positioner (include 3+4 valves & pipelines)",
                    "specification": "Cascade Sideshift (Hook-on) & Fork Positioner (include 3+4 valves & pipelines)",
                    "price": 1560
                },
            ],
        },
        {
            "name": "Tyres",
            "options": [
                {
                    "description": "Solid Tyre",
                    "specification": "Solid tyre",
                    "price": 0

                },
                {
                    "description": "Pneumatic Tyre",
                    "specification": "Pneumatic tyre",
                    "price": 0
                },
                {
                    "description": "Non Marking Tyre",
                    "specification": "Non Marking tyre",
                    "price": 138
                },
            ],
        },
        {
            "name": "Forks",
            "options": [
                {
                    "description": "1070mm Tyne",
                    "specification": "1070mm*100m*40mm",
                    "price": 0
                },
                {
                    "description": "1150mm Tyne",
                    "specification": "1150mm",
                    "price": 64
                },
                {
                    "description": "1200mm Tyne",
                    "specification": "1200mm",
                    "price": 127
                },
                {
                    "description": "1350mm Tyne",
                    "specification": "1350mm",
                    "price": 255
                },
                {
                    "description": "1500mm Tyne",
                    "specification": "1500mm",
                    "price": 318
                },
                {
                    "description": "1800mm Tyne",
                    "specification": "1800mm",
                    "price": 510
                },
            ],
        },
        {
            "name": "Safety Light",
            "options": [
                {
                    "description": "Standard",
                    "specification": "Standard",
                    "price": 0
                },
                {
                    "description": "Rear Bluespot Safety Light",
                    "specification": "Rear Bluespot Safety Light",
                    "price": 117
                },
                {
                    "description": "Three Way Directional Safety Lights(Red)",
                    "specification": "Three Way Directional Safety Lights(Red)",
                    "price": 350
                },
            ],
        },
        {
            "name": "Rear Light",
            "options": [
                {
                    "description": "Standard",
                    "specification": "Standard",
                    "price": 0
                },
                {
                    "description": "Rear Working Lights",
                    "specification": "Rear Working Lights",
                    "price": 117
                }
            ],
        },
        {
            "name": "Attached Piping",
            "options": [
                {
                    "description": "3 Spool",
                    "specification": "3 Spool",
                    "price": 0
                },
                {
                    "description": "4 Spool",
                    "specification": "4 Spool",
                    "price": 297
                }
            ],
        },
        {
            "name": "MCV",
            "options": [
                {
                    "description": "3 Spool & Lever",
                    "specification": "3 Spool & Lever",
                    "price": 0
                },
                {
                    "description": "4 Spool & Lever",
                    "specification": "4 Spool & Lever",
                    "price": 446
                }
            ],
        },
        {
            "name": "OHG",
            "options": [
                {
                    "description": "Standard",
                    "specification": "Standard",
                    "price": 0
                },
                {
                    "description": "Standard OHG with Raincover",
                    "specification": "Standard OHG with Raincover",
                    "price": 212
                },
                {
                    "description": "Full Steel Cabin without Sidedoor",
                    "specification": "Full Steel Cabin without Sidedoor",
                    "price": 1698
                }
            ],
        },
        {
            "name": "Fleet Management",
            "options": [
                {
                    "description": "Fleet Management (1 yr subscription)",
                    "specification": "Fleet Management (1 yr subscription)",
                    "price": 0
                },
                {
                    "description": "Fleet Management (2 yr subscription)",
                    "specification": "Fleet Management (2 yr subscription)",
                    "price": 0
                },
                {
                    "description": "Fleet Management (3 yr subscription)",
                    "specification": "Fleet Management (3 yr subscription)",
                    "price": 0
                },
                {
                    "description": "Fleet Management (4 yr subscription)",
                    "specification": "Fleet Management (4 yr subscription)",
                    "price": 0
                },
                {
                    "description": "Fleet Management (5 yr subscription)",
                    "specification": "Fleet Management (5 yr subscription)",
                    "price": 0
                }
            ]
        }
    ]
})

const ModelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        changeSelection(state, action) {
            state.data.optionsCategories[action.payload.optionsCategoryIndex].selected = action.payload.optionIndex
            console.log(action.payload)
            state.data.discounts.forEach(discount => {
                if(action.payload.optionsCategoryIndex === discount.optionsCategoryIndex){
                    if(action.payload.optionIndex === discount.optionIndex){
                        state.data.optionsCategories[discount.includedOptionsCategoryIndex].options[discount.includedOptionIndex].displayPrice = "Included"
                    } else {
                        state.data.optionsCategories[discount.includedOptionsCategoryIndex].options[discount.includedOptionIndex].displayPrice = null
                    }
                }
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getModelByCode.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getModelByCode.fulfilled, (state, action) => {
            // console.log("complete", action.payload)
            state.data = action.payload
            state.loading = false
        });
    }
})

export const getModelByCode = createAsyncThunk(
    "model/getModelByCode",
    async (modelCode) => {
        return await axios
            .get(`${import.meta.env.VITE_API_URL}/Models/${modelCode}`)
            .then(res => {
                console.log(res.data)
                const discounts = res.data.discounts

                return res.data
            })
            .catch(err => {
                return thunkAPI.rejectWithValue(err.message)
            })
    }
)

export const {
    changeSelection
} = ModelSlice.actions

export default ModelSlice.reducer
