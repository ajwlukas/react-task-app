import React, { FC,  useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiLogIn, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { IBoard } from "../../types";
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from "./BoardList.css";
import { clsx } from "clsx";
import { GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { removeUser, setUser } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId,
}) => {
  const { boardArray } = useTypedSelector((state) => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const dispatch = useTypedDispatch();

  const {isAuth} = useAuth();
  console.log(isAuth);
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogIn = () =>{
    signInWithPopup(auth,provider)
    .then(userCredential =>{
      console.log(userCredential);

      dispatch(setUser({
        email : userCredential.user.email,
        id : userCredential.user.uid
      }))
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      dispatch(removeUser());
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const handleClick = () => {
      setIsFormOpen(!isFormOpen)
  };

  return (
    <div className={container}>
      <div className={title}>게시판:</div>

      {boardArray.map((board: IBoard, index: number) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) ===
                index,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) !==
                index,
            }
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}

      <div className={addSection}>
        {
          isFormOpen ? (
            <SideForm  setIsFormOpen={setIsFormOpen} />
          ) : (
            <FiPlusCircle
              className={addButton}
              onClick={handleClick}
            />
          )
          //from react Icons
        }

        {isAuth 
        ?
         <FiLogOut className={addButton} onClick={handleSignOut}/>
        :
         <FiLogIn className={addButton} onClick={handleLogIn}/>}
        

        
      </div>
    </div>
  );
};

export default BoardList;
