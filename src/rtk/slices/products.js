import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useApi from '../../hooks/useApi'
export const viewWayCONSTANTS = {
  VERTICAL: 'VERTICAL',
  GRID: 'GRID'

}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { get } = useApi('/products');
  const { data } = await get();
  return data
})

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    viewWay: viewWayCONSTANTS.VERTICAL,
    products: []
  },
  reducers: {
    toggleViewWay: (state, action) => {
      state.viewWay = state.viewWay === viewWayCONSTANTS.VERTICAL ? viewWayCONSTANTS.GRID : viewWayCONSTANTS.VERTICAL
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export const { toggleViewWay } = ProductsSlice.actions

export default ProductsSlice.reducer
