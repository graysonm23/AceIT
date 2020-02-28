import React, { useState } from "react";
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

function Signup() {
  const [email, setEmail] = useState([]);
  const handleEmailSubmit = event => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="homepage">
      <Container className="homeContainer">
        <Row>
          <Col className="homeCol">
            <Card className="homeCard">
              <CardBody>
                <CardTitle className="homeCardTitle">
                  <h1 className="signupTitle">Signup</h1>
                </CardTitle>
                <CardBody className="homeCardBody">
                  <form onSubmit={handleEmailSubmit}>
                    <FormGroup>
                      <label for="Your Name">
                        <h4 className="signupSubtitle">Enter your Name</h4>{" "}
                      </label>
                      <input
                        className="col s-12 signup-input"
                        type="Name"
                        name="name"
                        id="exampleName"
                        placeholder="John Doe"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label for="Your Email">
                        <h4 className="signupSubtitle">Enter your Email</h4>{" "}
                      </label>
                      <input
                        className="col s-12 signup-input"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                      />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                      <label for="Your Email">
                        <h4 className="signupSubtitle">Enter your Password</h4>{" "}
                      </label>
                      <input
                        className="col s-12 signup-input"
                        type="password"
                        name="ExamplePassword"
                        id="examplePassword"
                        placeholder="Your Password Here"
                      />
                      <br></br>
                      <input
                        className="col s-12 signup-input"
                        type="confirmPassword"
                        name="ConfirmPassword"
                        id="CondirmPassword"
                        placeholder="Confirm Password"
                      />
                    </FormGroup>
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