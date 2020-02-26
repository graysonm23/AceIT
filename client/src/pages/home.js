import React from "react";
import "../css/home.css";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

function Home() {
  return (
    <div className="homepage">
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  <h1>This is the title</h1>
                </CardTitle>
                <CardBody>
                  <p>card body</p>
                </CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
