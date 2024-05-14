export interface ITask{
    taskId : string;
    taskName : string;
    taskDesc : string;
    taskOwner : string;
}

export interface ILogItem {
    logId : string;
    logAuthor : string;
    logMessage : string;
    logTimestamp : string;
}