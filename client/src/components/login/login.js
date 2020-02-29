<<<<<<< HEAD
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Form className="loginForm">
                <Row className="loginRow">
                    <Col className="loginCol" md={6}>
                        <FormGroup>
                            <Label for="exampleEmail"><i class="fas fa-user"></i>Email</Label>

                            <div class="input-box">
                                <Input type="email" name="email" id="exampleEmail" placeholder="Please place email address here" />
                            </div>
                        </FormGroup>

                    </Col>


                    <Col className="loginCol" md={6}>
                        <FormGroup>
                            <Label for="examplePassword"><i class="fas fa-unlock-alt"></i>Password</Label>
                            <div class="input-box">
                                <Input type="password" name="password" id="examplePassword" placeholder="Please place password here" />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>

                <Button type="submit">Login</Button>

            </Form>
        </div>
    )

}

export default Example;
=======
import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Example = props => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">
              <i className="fas fa-user"></i>Email
            </Label>

            <div className="input-box">
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </div>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">
              <i className="fas fa-unlock-alt"></i>Password
            </Label>
            <div className="input-box">
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </div>
          </FormGroup>
        </Col>
      </Row>

      <Button>Login</Button>
    </Form>
  );
};

export default Example;
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7
