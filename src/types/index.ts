//src/types/index.ts

export interface ITask {
    taskId: string;
    taskName: string;
    taskDesc: string;
    taskOwner: string;
  }
  
  export interface ILogItem {
    logId: string;
    logAuthor: string;
    logMessage: string;
    logTimestamp: string;
  }
  
  export interface IBoard {
    boardId: string;
    boardName: string;
    lists: IList[];
  }
  
  export interface IList {
    listId: string;
    listName: string;
    tasks: ITask[];
  }
  