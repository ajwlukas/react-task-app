import React from 'react'

type TTaskProps = {
  taskName:string;
  taskDesc:string;
  boardId:string;
  taskId:string;
  index:number;
}


const Task : React.FC<TTaskProps>
= ({taskId, taskName, taskDesc, boardId}) => {
  return (
    <div>Task</div>
  )
}

export default Task