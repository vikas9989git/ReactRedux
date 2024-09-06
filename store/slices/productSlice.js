import {createSlice} from '@reduxjs/toolkit'

export let productSlice=createSlice({
    name:"product",
    initialState:{pname:"telivision",price:1050000},
    reducers:{
        chageProductData:(state,action)=>{
            state.pname=action.payload.pname;
            state.price=action.payload.price;
        }
    }
})

export let {chageProductData}=productSlice.actions
export default productSlice.reducer