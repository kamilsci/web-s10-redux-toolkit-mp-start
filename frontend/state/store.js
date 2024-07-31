// ✨ create your `store` in this module
import { configureStore } from '@reduxjs/toolkit'
import qoutesReducer from './quotesSlice'

export const store = configureStore({
    reducer: {
        quotesState: qoutesReducer,
    }
})