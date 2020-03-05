import React, { useState } from "react";
import "../css/signup.css";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import API from "../utils/API";
import ValidatedSignupForm from "./validatedSignupForm";

function Signup() {
  return (
    <div className="signupBackground">
      <Container className="homeContainer">
        <Row className="SignupRow">
          <Col className="SignupCol">
            <Card className="SignupCard">
              <CardBody className="signUpCardBody">
                <CardTitle className="homeCardTitle">
                  <h1 className="signupTitle">Signup</h1>
                </CardTitle>
                <CardBody className="homeCardBody">
                  <ValidatedSignupForm />
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
