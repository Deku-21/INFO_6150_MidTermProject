import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/product-list/slices/productSlice"; //Importing the slice created in the productSlice.jsx file

export const store = configureStore({
    reducer:{
        product: productSlice.reducer, // Making a default reducer having all the reducers of the productSlice which present in the productSlice.jsx file. 
        //This default reducer here in store is named "product" which has all the reducers of the productSlice which present in the productSlice.jsx file 
    },
})