import {configureStore} from '@reduxjs/toolkit'
import StoreSlice from "./StoreSlice"

export const store = configureStore({
    reducer: {
        cart: StoreSlice,
    },
})