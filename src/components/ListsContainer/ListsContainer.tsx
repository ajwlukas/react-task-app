import React, { FC, memo } from 'react'
import { IList } from '../../types';
import List from '../List/List';
import ActionButton from '../ActionButton/ActionButton';
import { listsContainer } from './ListsContainer.css';

type TListsContainerProps = {
  boardId:string;
  lists:IList[];
}

const ListsContainer : FC<TListsContainerProps> = memo(({lists, boardId}) => {
  console.log('ListsContainer rendered');

  return (
    <div className={listsContainer}>
      {
        lists.map((list) => (
          <List 
          key={list.listId}
           list={list}
           boardId={boardId}
          />
        ))
      }
      <ActionButton boardId={boardId} listId="" list/>
    </div>
  )
})

export default ListsContainer