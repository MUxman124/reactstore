import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Item {
    _id: string;
    quantity: number;
    title: string;
    image: string;
    price: number;
    description: string;
    rating: number;

}

interface CartState {
    cartData: Item[];
}

const initialState: CartState = {
    cartData: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Item>) {
            const item: Item | undefined = state.cartData.find((item) => item._id === action.payload._id);
            item ? (item.quantity += action.payload.quantity) : state.cartData.push(action.payload);
        },

        decrementQnt(state, action: PayloadAction<Item>) {
            const item: Item | undefined = state.cartData.find((item) => item._id === action.payload._id);
            if (item && item.quantity === 1) item.quantity = 1;
            else if (item) item.quantity -= 1;
        },

        incrementQnt(state, action: PayloadAction<Item>) {
            const item: Item | undefined = state.cartData.find((item) => item._id === action.payload._id);
            if (item) item.quantity += 1;
        },

        removeFromCart(state, action: PayloadAction<Item>) {
            state.cartData = state.cartData.filter((item) => item._id !== action.payload._id);
        },
    },
});

export const { addToCart, decrementQnt, incrementQnt, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
