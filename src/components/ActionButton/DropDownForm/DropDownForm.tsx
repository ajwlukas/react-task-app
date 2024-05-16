import React, { ChangeEvent, FC, useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardSlice";
import { v4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type TDropDownFormProps = {
  boardId: string;
  listId: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean;
};

const DropDownForm: FC<TDropDownFormProps> = ({
  boardId,
  listId,
  setIsFormOpen,
  list,
}) => {
  const [text, setText] = useState("");
  const formPlaceholder = list
    ? "리스트 이름을 입력하세요"
    : "할 일 이름을 입력하세요";

  const buttonTitle = list ? "리스트 추가하기" : "할 일 추가하기";

  const dispatch = useTypedDispatch();

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    if (text) {
      if (list) {
        dispatch(
          addList({
            boardId,
            list: { listId: v4(), listName: text, tasks: [] },
          })
        );

        dispatch(
          addLog({
            logId: v4(),
            logMessage: `리스트생성하기: ${text}`,
            logAuthor: "User",
            logTimestamp: String(Date.now()),
          })
        );
      } else {
        dispatch(
          addTask({
            boardId,
            listId,
            task: {
              taskId: v4(),
              taskName: text,
              taskDesc: "",
              taskOwner:"User"
            },
          })
        );
        
        dispatch(
            addLog({
              logId: v4(),
              logMessage: `일 생성하기: ${text}`,
              logAuthor: "User",
              logTimestamp: String(Date.now()),
            })
          );
      }
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        autoFocus
        placeholder={formPlaceholder}
        onBlur={() => setIsFormOpen(false)}
      />
      <div>
        <button onMouseDown={handleButtonClick}>{buttonTitle}</button>
        <FiX />
      </div>
    </div>
  );
};

export default DropDownForm;
