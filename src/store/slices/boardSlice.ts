import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalActive : false,
    boardArray:[]
}

const boardSlice  = createSlice({
    name:'',
    initialState,
    reducers:{

    }
})

export const boardReducer = boardSlice.reducer;//sub reducer를 combine 해서 reducer를 만든다.