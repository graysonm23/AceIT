import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    return (

        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail"><i class="fas fa-user"></i>Email</Label>

                        <div class="input-box">
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </div>
                    </FormGroup>

                </Col>


                <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword"><i class="fas fa-unlock-alt"></i>Password</Label>
                        <div class="input-box">
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </div>
                    </FormGroup>
                </Col>
            </Row>

            <Button>Login</Button>
        </Form>

    );
}

export default Example;