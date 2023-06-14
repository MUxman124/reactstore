import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    cartData: any[];
}

const initialState: CartState = {
    cartData: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<any>) {
            const item  = state.cartData.find((item) => item._id === action.payload._id);
           item? item.quantity += action.payload.quantity : state.cartData.push(action.payload);
        },

        decrementQnt(state, action: PayloadAction<any>) {
            const item  = state.cartData.find((item) => item._id === action.payload._id);
            if (item.quantity === 1)
                item.quantity = 1;
            else
                item.quantity -= 1;
        },

        incrementQnt(state, action: PayloadAction<any>) {
            const item  = state.cartData.find((item) => item._id === action.payload._id);
            item.quantity += 1;
        },
        removeFromCart(state, action: PayloadAction<any>) {
            state.cartData = state.cartData.filter((item) => item._id !== action.payload._id);
        }
    },
});

export const { addToCart, decrementQnt, incrementQnt, removeFromCart } = cartSlice.actions;


export default cartSlice.reducer;