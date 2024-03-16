import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchAllProductsAPI} from './../api/productsApi';
import { fetchFilteredProductsAPI } from "./../api/productsApi";

const initialState = {
  productDetails: [],
  status: 'idle',
};

export const fetchAllProductsThunk = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
        const response = await fetchAllProductsAPI();
        return response.data;
  }
);

export const fetchFilteredProductsThunk = createAsyncThunk(
    'products/fetchFilteredProducts',
    async (filter) => {
        console.log('thunk filter' , filter);
          const response = await fetchFilteredProductsAPI(filter);
          return response.data;
    }
  );

export const productSlice = createSlice({
    name: 'productSlice_1', //name of the slice 
    initialState,
    reducers: { // All the reducer actions are defined
        increment: (state, action) => {
          state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchAllProductsThunk.fulfilled, (state, action) => {
                state.productDetails = action.payload;
                state.status = 'idle';
            })
         .addCase(fetchAllProductsThunk.pending, (state) => {
                state.status = 'loading';
            })
         .addCase(fetchAllProductsThunk.rejected, (state) => {
                state.status = 'failed';
            })
        .addCase(fetchFilteredProductsThunk.fulfilled, (state, action) => {
                state.productDetails = action.payload;
                state.status = 'idle';
            })
         .addCase(fetchFilteredProductsThunk.pending, (state) => {
                state.status = 'loading';
            })
         .addCase(fetchFilteredProductsThunk.rejected, (state) => {
                state.status = 'failed';
            });
        
        
    },

})

export const { increment } = productSlice.actions;

export default productSlice.reducer;

export const selectAllProducts = (state) => state.product.productDetails // state.<default reducer initialized in store for this slice>.<state of this slice>
  