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
