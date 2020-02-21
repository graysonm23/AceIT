import React from 'react';
import "./layout.css";
import { Container, Row, Col } from 'reactstrap';
import navbar from "./navbar";


class layout extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Row xs="2">
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                </Row>
                <Row xs="3">
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                </Row>
                <Row xs="4">
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                </Row>
                <Row xs="4">
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col xs="6">Column</Col>
                    <Col>Column</Col>
                </Row>
                <Row xs="1" sm="2" md="4">
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <Col>Column</Col>
                </Row>
            </Container>
        );
    }
}

export default layout;

