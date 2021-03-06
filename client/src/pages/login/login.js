import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody
} from "reactstrap";
import API from "../../utils/API";
import ls from "local-storage";

const Signin = props => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [isLoggedIn, setBoolLogin] = useState(false);
  const handleEmailSubmit = event => {
    event.preventDefault();
    // axios.post("/api/auth/signup");
    const userObj = {
      email: email,
      password: password
    };
    API.signInRoute(userObj)
      .then(res => {
        console.log(res.data);
        if (res) {
          const token = res.data.token;
          setBoolLogin(true);
          tokenDidMount(token);
        }
      })
      .catch(err => console.log("Unable to save email ", err));
  };

  const tokenDidMount = token => {
    ls.set(token);
  };
  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/board"
        }}
      />
    );
  }
  return (
    <div className="signupBackground">
      <Container className="homeContainer">
        <Row className="SignupRow">
          <Col className="SignupCol">
            <Card className="SignupCard">
              <CardBody className="signUpCardBody">
                <Form className="loginForm" onSubmit={handleEmailSubmit}>
                  <label for="exampleEmail">
                    <i className="fas fa-user"></i> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Please place email address here"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label for="examplePassword">
                    <i className="fas fa-unlock-alt"></i> Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Please place password here"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <p>
                    Don't have an account? Click <a href="/signup">here</a>
                  </p>
                  <button type="submit">Login</button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
