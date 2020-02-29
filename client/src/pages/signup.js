import React, { useState } from "react";
import ValidatedSignupForm from "./validatedSignupForm";
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
<<<<<<< HEAD
  const [password, setPassword] = useState([]);
  const handleEmailSubmit = event => {
    event.preventDefault();
    // axios.post("/api/auth/signup");

    console.log(event);
    const userObj = {
      email: email,
      password: password
    }
    API.signUpRoute(userObj)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Unable to save email ", err));
=======
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7
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
<<<<<<< HEAD
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
                    <FormGroup>
                      <label for="Your Email">
                        <h4 className="signupSubtitle">Enter your Password</h4>{" "}
                      </label>
                      <input
                        onChange={e => setPassword(e.target.value)}
                        className="col s-12 signup-input"
                        type="password"
                        name="ExamplePassword"
                        id="examplePassword"
                        placeholder="Your Password Here"
                      />
                      <br></br>
                      {/* <input
                        className="col s-12 signup-input"
                        type="confirmPassword"
                        name="ConfirmPassword"
                        id="CondirmPassword"
                        placeholder="Confirm Password"
                      /> */}
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
=======
                  <form>
                    <ValidatedSignupForm />
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7
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
