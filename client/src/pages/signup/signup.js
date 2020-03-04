import React, { useState } from "react";
import ValidatedSignupForm from "./validatedSignupForm";
import "./signup.css";
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
import API from "../../utils/API";

function Signup() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const handleEmailSubmit = event => {
    event.preventDefault();
    // axios.post("/api/auth/signup");

    console.log(event);
    const userObj = {
      email: email,
      password: password
    };
    API.signUpRoute(userObj)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("Unable to save email ", err));
  };
  return (
    <div className="signupPage">
      <Container className="signupContainer">
        <Row>
          <Col className="SignupCol">
            <Card className="SignupCard">
              <CardBody className="signUpCardBody">
                <CardTitle className="homeCardTitle">
                  <h1 className="signupTitle">Signup</h1>
                </CardTitle>
                <CardBody className="homeCardBody">
                  <form>
                    <ValidatedSignupForm />
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
