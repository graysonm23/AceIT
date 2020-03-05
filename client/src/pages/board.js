import React, { useState, useEffect } from "react";
import { Button, Card, CardTitle, CardBody, Container } from "reactstrap";
import API from "../utils/API";
import "../css/Cards.css";

function Board() {
  const [board, setBoard] = useState([]);
  const [boardDifference, setBoardDifference] = useState(27);
  const [boardArray, setBoardArray] = useState([]);
  const dummyCards = boardDifference - board.length;

  useEffect(() => {
    boardsDidMount();
    generateDummyCards();
    generateCards();
  });
  const generateCards = () => {
    for (var i = 0; i < board.length; i++) {
      // push the component to elements!
      boardArray.push(<Card value={board[i]} />);
    }
    console.log(board.length, boardArray.length);
  };
  const generateDummyCards = () => {
    for (var i = 0; i < boardDifference; i++) {
      board.push(<Card style={{ backgroundColor: "red" }} value={i} />);
    }
    console.log(board.length);
  };
  const boardsDidMount = () => {
    // API.boardEditorRoute(board)
    //   .then(res => {
    //     setBoard(res.data);
    //   })
    //   .catch(err => console.log("Unable to load user ", err));
  };

  return (
    <div className="signupBackground">
      <div>
        <h1 className="CardTitleBoard">Cards Appear Here</h1>
      </div>
      <Container className="ContainerBoard">
        {board.map((card, index) => (
          <Card>Card {index}</Card>
        ))}
      </Container>
    </div>
  );
}
export default Board;
