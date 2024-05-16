import React from 'react'
import { container, description, title } from './Task.css';

type TTaskProps = {
  index:number;
  taskId:string;
  boardId:string;
  taskName:string;
  taskDesc:string;
}


const Task : React.FC<TTaskProps>
= ({index, taskId, boardId, taskName, taskDesc}) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDesc}</div>

    </div>
  )
}

export default Task