import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

function BoardList(props) {
  return(
    <React.Fragment>
      <h1>Board List</h1>
      <hr/>
      {Object.values(props.boardList).map((board) => {
        return <Board
        whenBoardClicked={props.onBoardSelection}
        onBoardDeleteBoard={props.onDeleteBoard}
        name={board.name}
        description={board.description}
        id={board.id}
        key={board.id} />
      })}
    </React.Fragment>
  )
}

BoardList.propTypes = {
  boardList: PropTypes.object
}

export default BoardList;