import {createSlice} from "@reduxjs/toolkit";
import type {ProductType} from "../../utils/shop-types.ts";

type ProductsState = {
    currProds: ProductType[];
}

const initialState:ProductsState = {
    currProds: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        prodsUpd: (state, action) => {
            state.currProds = action.payload;
        }
    }
})

export const {prodsUpd} = productSlice.actions;
export const prodsReducer = productSlice.reducer