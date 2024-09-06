import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export let secondapiThunk=createAsyncThunk("secondapiData",async(url,{rejectWithValue})=>{
    let response=await axios.get(url);
    let secondapiData=response.data;
    if(response.status==200){
        return secondapiData;
    }
    else{
        rejectWithValue(secondapiData);
    }
})

export let secondapiSlice=createSlice({
    name:"secondapi",
    initialState:{secondapiData:[],secondisPending:false,secondisError:false,seconderrMsg:"",secondisSuccess:false},
    reducers:{},
    extraReducers:{
        [secondapiThunk.pending]:(state,action)=>{
            state.secondisPending=true;
        },
        [secondapiThunk.fulfilled]:(state,action)=>{
            state.secondisPending=false;
            state.secondapiData=action.payload;
            state.secondisError=false;
            state.seconderrMsg="";
            state.secondisSuccess=true;
        },
        [secondapiThunk.rejected]:(state,action)=>{
            console.log("rejected:",action)
            state.secondisPending=false;
            state.secondisError=true;
            state.seconderrMsg=action.error;
        }
    }
})
export let {}=secondapiSlice.actions;
export default secondapiSlice.reducer;