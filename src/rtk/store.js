import { configureStore } from '@reduxjs/toolkit'
import themeSlice  from './slices/themeSLice'
import ProductsSlice  from './slices/products'
import cartSlice from './slices/cartSlice'

export default configureStore({
  reducer: {
    theme : themeSlice,
    products : ProductsSlice,
    cart : cartSlice
  },
})