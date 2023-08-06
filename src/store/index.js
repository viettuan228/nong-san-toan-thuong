import { configureStore } from '@reduxjs/toolkit'
import banner from './homeBanner'
export const store = configureStore({
    reducer: { banner },
})
