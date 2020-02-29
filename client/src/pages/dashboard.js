import React, { useState } from "react";
import "../css/dashboard.css";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  CardLink,
  Container
} from "reactstrap";

function Dashboard() {
  const [count, setCount] = useState(0);
  //   const handleBoardSubmit = event => {
  //     event.preventDefault();
  //     console.log(event);
  //   };
  return (
    <div className="dashHome">
      <Container className="dashContainer">
        <Row>
          <h3>example</h3>
        </Row>
        <Row>
          <Col>
            {" "}
            <Card>
              <CardImg
                top
                width="100%"
                src="../images/exampleCardImage.png"
                alt="Card image"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
