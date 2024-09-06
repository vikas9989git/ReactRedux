import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import userSlice from './slices/userSlice'
import apiSlice from './slices/apiSlice'

export let store=configureStore({
    reducer:{
        user:userSlice,
        product:productSlice,
        api:apiSlice
    }
})