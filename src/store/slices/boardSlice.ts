import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive : boolean;
    boardArray: IBoard[];
}

type TAddBoardAction = {
    board: IBoard;
}
type TDeleteListAction = {
    boardId: string;
    listId: string;
}

const initialState : TBoardState = {
    modalActive : false,
    boardArray:[
        {
            boardId:'board-0',
            boardName:'첫 번 째 게시물',
            lists:[
                {
                    listId:"list-0",
                    listName:"list 0",
                    tasks:[
                        {

                            taskId:"task-0",
                            taskName:"task 0",
                            taskDesc : "Description",
                            taskOwner : "John"
                        },
                        {

                            taskId:"task-1",
                            taskName:"task 1",
                            taskDesc : "Description",
                            taskOwner : "Tom"
                        }
                    ]
                },
                {
                    listId:"list-1",
                    listName:"list 1",
                    tasks:[
                        {

                            taskId:"task-3",
                            taskName:"task 3",
                            taskDesc : "Description",
                            taskOwner : "John"
                        },
                        {

                            taskId:"task-1",
                            taskName:"task 2",
                            taskDesc : "Description",
                            taskOwner : "Tom"
                        }
                    ]
                }
            ]
        }
    ]
}

const boardSlice  = createSlice({
    name:'board',
    initialState,
    reducers:{
        addBoard:(state, {payload}:PayloadAction<TAddBoardAction>)=>{
            state.boardArray.push(payload.board)
        },

        deleteList:(state,{payload}:PayloadAction<TDeleteListAction>)=>{
            state.boardArray = state.boardArray.map((board)=>
                board.boardId === payload.boardId?
                {
                    ...board,
                    lists: board.lists.filter(list=> list.listId!== payload.listId)
                }: board
    
        )
        },
        setModalActive:(state,{payload}:PayloadAction<boolean>)=>{
            state.modalActive = payload;
        }
    }
})

export const {addBoard, deleteList, setModalActive} = boardSlice.actions;
export const boardReducer = boardSlice.reducer;//sub reducer를 combine 해서 reducer를 만든다.