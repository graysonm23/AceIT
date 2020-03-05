import React, { useState } from "react";
import "../css/signup.css";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import ValidatedSignupForm from "./validatedSignupForm";

function Signup() {
  return (
    <div className="signupBackground">
      <Container className="homeContainer">
        <Row className="SignupRow">
          <Col className="SignupCol">
            <Card className="SignupCard">
              <CardBody className="signUpCardBody">
                <ValidatedSignupForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
