import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: {
        date: {
            field: "Date",
            value: "03/05/2024",
        },
        client: {
            field: "Client",
            value: "TXK PTY LTD",
        },
        abn: {
            field: "ABN",
            value: "76 136 824 934",
        },
        address: {
            field: "Address",
            value: "18 Edgecombe Ct, Moorabbin VIC 3189",
        },
        name: {
            field: "Contact Person",
            value: "Jack",
        },
        email: {
            field: "Email",
            value: "jackshi@txk.com.au",
        },
        phone: {
            field: "Phone",
            value: "0432 565 285",
        },
        sales: {
            field: "Sales",
            value: "Brandon Yu"
        },
        reference: {
            field: "Quote Reference",
            value: "QR030524A",
        },
    }
}

const SaleInformationSlice = createSlice({
    name: 'information',
    initialState: initialState,
    reducers: {
        setInformationState(state, action) {
            state.data[action.payload.key].value = action.payload.value
        }
    }
})

export const {
    setInformationState,
} = SaleInformationSlice.actions

export default SaleInformationSlice.reducer