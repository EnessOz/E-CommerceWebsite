import { configureStore} from '@reduxjs/toolkit'
import ProductReducers from "./counterSlice"


export const store = configureStore({
  reducer: {
    products: ProductReducers,
  },
})