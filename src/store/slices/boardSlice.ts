import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive : boolean;
    boardArray: IBoard[];
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

    }
})

export const boardReducer = boardSlice.reducer;//sub reducer를 combine 해서 reducer를 만든다.