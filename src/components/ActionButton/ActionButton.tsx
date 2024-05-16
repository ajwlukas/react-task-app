import React, { FC } from 'react'
import { IoIosAdd } from 'react-icons/io';
import DropDownForm from './DropDownForm/DropDownForm';
import { listButton, taskButton } from './ActionButton.css';

type TActionButtonProps = {
  boardId:string;
  listId:string;
  list?:boolean;
}


const ActionButton:FC<TActionButtonProps> = ({boardId, listId, list}) => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const buttonText = list ? "리스트 추가하기" : "할 일 추가하기";

  return isFormOpen ? (
    <DropDownForm
    setIsFormOpen={setIsFormOpen}
    list = {list ? true : false}
    boardId = {boardId}
    listId = {listId}
    />
  )
  :
  (
    <div className={list? listButton:taskButton}
    onClick={()=>setIsFormOpen(true)}>
      <IoIosAdd/>
      <p>{buttonText}</p>
    </div>
  )
}

export default ActionButton