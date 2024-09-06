import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export let apiThunk=createAsyncThunk("apiData",async(url,{rejectWithValue})=>{
    let response=await axios.get(url);
    let apiData=response.data;
    if(response.status==200){
        return apiData;
    }
    else{
        rejectWithValue(apiData);
    }
})

export let apiSlice=createSlice({
    name:"api",
    initialState:{apiData:{},isPending:false,isError:false,errMsg:"",isSuccess:false},
    reducers:{},
    extraReducers:{
        [apiThunk.pending]:(state,action)=>{
            console.log("pending:",action)
            state.isPending=true;
        },
        [apiThunk.fulfilled]:(state,action)=>{
            console.log("fulfilled:",action)
            state.isPending=false;
            state.apiData=action.payload;
            state.isError=false;
            state.errMsg="";
            state.isSuccess=true;
        },
        [apiThunk.rejected]:(state,action)=>{
            console.log("rejected:",action)
            state.isPending=false;
            state.isError=true;
            state.errMsg=action.error;
        }
    }
})
export let {}=apiSlice.actions;
export default apiSlice.reducer;