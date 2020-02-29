import React, { useState } from "react";
import axios from 'axios';
import "../css/signup.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  button,
  form,
  FormGroup,
  label,
  input,
  Button
} from "reactstrap";
import API from "../utils/API";

function Signup() {
  const [email, setEmail] = useState([]);
  const handleEmailSubmit = event => {
    event.preventDefault();
    axios.post("/api/auth/signup");
    console.log(event);
    API.saveBook(email)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Unable to save email ", err));
  };
  return (
    <div className="homepage">
      <Container className="homeContainer">
        <Row>
          <Col className="homeCol">
            <Card className="homeCard">
              <CardBody>
                <CardTitle className="homeCardTitle">
                  <br></br>
                  <br></br>
                  <h1>Signup</h1>
                </CardTitle>
                <CardBody className="homeCardBody">
                  <form onSubmit={handleEmailSubmit}>
                    <FormGroup>
                      <label for="Your Email">
                        <br></br>
                        <h4>Enter your Email</h4>{" "}
                      </label>
                      <br></br>
                      <br></br>
                      <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="col s-12 signup-input"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                      />
                    </FormGroup>
                    <br></br>
                    <Button id="buttonCancel" size="lg" color="danger">
                      X
                    </Button>{" "}
                    <Button
                      color="success"
                      id="buttonSubmit"
                      size="lg"
                      onClick={handleEmailSubmit}
                    >
                      ✓
                    </Button>
                  </form>
                </CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
