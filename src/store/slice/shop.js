import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        products: [],
        navigation: []
    },
    reducers: {
        setShop(state, action) {
            state.products = action.payload
        },

        setNavigation(state, action) {
            state.navigation.push(action.payload)
        },

        setNavigationHome(state, action) {
            state.navigation = action.payload
        }
    }
});


export const {
     setShop,
     setNavigation,
     setNavigationHome } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;