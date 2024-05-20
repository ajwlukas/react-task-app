import React from 'react'
import { container, description, title } from './Task.css';
import { Draggable } from 'react-beautiful-dnd';

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
    <Draggable draggableId={taskId} index={index}>
      {provided =>(
    <div 
    className={container}
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    >
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDesc}</div>

    </div>
    )}
    </Draggable>
  )
}

export default Task