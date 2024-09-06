import {createSlice} from '@reduxjs/toolkit'

export let userSlice=createSlice({
    name:"user",
    initialState:{username:"vikas"},
    reducers:{}
})

export default userSlice.reducer