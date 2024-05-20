import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";


const initialState = {
    email : '',
    id : ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.email;
        },
        removeUser:(state)=>{
            state.email = '';
            state.id = '';
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;//sub reducer를 combine 해서 reducer를 만든다.