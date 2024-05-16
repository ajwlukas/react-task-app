import { useState } from "react";
import { appContainer, board } from "./App.css";
import BoardList from "./components/BoardList/BoardList";

function App() {
  const [activeBoardId, setActiveBoardId] = useState("board-0");
  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />

      <div className={board}> </div>
      <div>
        <button>이 게시판 삭제하기</button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
