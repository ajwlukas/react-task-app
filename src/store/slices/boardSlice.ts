import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

type TAddBoardAction = {
    board: IBoard;
}
type TDeleteBoardAction = {
    boardId: string;
}
type TDeleteListAction = {
    boardId: string;
    listId: string;
}

type TAddListAction = {
    boardId: string;
    list: IList;
}

type TAddTaskAction = {
    boardId: string;
    listId: string;
    task: ITask;
}

type TDeleteTaskAction = {
    boardId: string;
    listId: string;
    taskId: string;
}

type TSortAction = {
    boardIndex: number;
    droppableIdStart: string;
    droppableIdEnd: string;
    droppableIndexStart: number;
    droppableIndexEnd: number;
    draggableId: string;
}

const initialState: TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: '첫 번 째 게시물',
            lists: [
                {
                    listId: "list-0",
                    listName: "list 0",
                    tasks: [
                        {

                            taskId: "task-0",
                            taskName: "task 1",
                            taskDesc: "Description",
                            taskOwner: "John"
                        },
                        {

                            taskId: "task-1",
                            taskName: "task 2",
                            taskDesc: "Description",
                            taskOwner: "Tom"
                        }
                    ]
                },
                {
                    listId: "list-1",
                    listName: "list 1",
                    tasks: [
                        {

                            taskId: "task-2",
                            taskName: "task 3",
                            taskDesc: "Description",
                            taskOwner: "John"
                        },
                        {

                            taskId: "task-3",
                            taskName: "task 4",
                            taskDesc: "Description",
                            taskOwner: "Tom"
                        }
                    ]
                }
            ]
        }
    ]
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board)
        },

        deleteBoard: (state, { payload }: PayloadAction<TDeleteBoardAction>) => {
            state.boardArray = state.boardArray.filter(board => board.boardId !== payload.boardId);
        },

        addList: (state, { payload }: PayloadAction<TAddListAction>) => {
            state.boardArray.map(board =>
                board.boardId === payload.boardId ?
                    { ...board, lists: board.lists.push(payload.list) } : board
            )
        },

        addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
            state.boardArray.map(board =>
                board.boardId === payload.boardId ?
                    {
                        ...board,
                        lists: board.lists.map(
                            list => list.listId === payload.listId
                                ? {
                                    ...list,
                                    tasks: list.tasks.push(payload.task)
                                } : list)
                    }
                    : board)
        },

        updateTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {

            state.boardArray = state.boardArray.map(board =>
                board.boardId === payload.boardId
                    ?
                    {
                        ...board, lists: board.lists.map(
                            list => list.listId === payload.listId
                                ?
                                {
                                    ...list,
                                    tasks: list.tasks.map(
                                        task => task.taskId === payload.task.taskId
                                            ?
                                            payload.task
                                            : task)
                                }
                                : list
                        )
                    }
                    : board
            )
        },

        deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
            state.boardArray = state.boardArray.map(board =>
                board.boardId === payload.boardId
                    ?
                    {
                        ...board, lists: board.lists.map(
                            list => list.listId === payload.listId
                                ?
                                {
                                    ...list,
                                    tasks: list.tasks.filter(
                                        task => task.taskId !== payload.taskId)
                                }
                                : list
                        )
                    }
                    : board
            )
        },

        deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
            state.boardArray = state.boardArray.map((board) =>
                board.boardId === payload.boardId ?
                    {
                        ...board,
                        lists: board.lists.filter(list => list.listId !== payload.listId)
                    } : board

            )
        },
        setModalActive: (state, { payload }: PayloadAction<boolean>) => {
            state.modalActive = payload;
        },

        sort: (state, { payload }: PayloadAction<TSortAction>) => {
            const board = state.boardArray[payload.boardIndex];

            const listStart = board.lists.find(list => list.listId === payload.droppableIdStart);
            const listEnd = payload.droppableIdStart !== payload.droppableIdEnd ? board.lists.find(list => list.listId === payload.droppableIdEnd) : listStart;

            const card = listStart!.tasks.splice(payload.droppableIndexStart, 1)[0];
            listEnd!.tasks.splice(payload.droppableIndexEnd, 0, card!);
        }

    }
})

export const { addBoard, addList, sort, addTask, deleteBoard, updateTask, deleteTask, deleteList, setModalActive } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;//sub reducer를 combine 해서 reducer를 만든다.