import React, {useState} from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API";

const Signin = props => {
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
    <div>
      <Form className="loginForm" onSubmit={handleEmailSubmit}>
        <Row className="loginRow">
          <Col className="loginCol" md={6}>
            <FormGroup>
              <Label for="exampleEmail">
                <i class="fas fa-user"></i>Email
              </Label>

              <div class="input-box">
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Please place email address here"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </FormGroup>
          </Col>

          <Col className="loginCol" md={6}>
            <FormGroup>
              <Label for="examplePassword">
                <i class="fas fa-unlock-alt"></i>Password
              </Label>
              <div class="input-box">
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Please place password here"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Signin;
