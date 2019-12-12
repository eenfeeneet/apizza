import React from "react";
import { Container } from "reactstrap";
import { Card, Button, Row, Col } from "reactstrap";
import { UncontrolledCollapse } from "reactstrap";

import Modal from "./PizzaModal";
import List from "./PizzaList";
import PizzaForm from "./PizzaNew";

const Pizzas = () => {
    return (
        <Container>
            <Row>
                <Col sm="6">
                    <PizzaForm />
                </Col>
                <Col sm="6">
                    <Card body>
                        <Button
                            color="primary"
                            id="toggler"
                            style={{ marginBottom: "1rem" }}
                        >
                            All Pizza
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                            <List />
                        </UncontrolledCollapse>
                    </Card>
                </Col>
            </Row>
            <Modal />
        </Container>
    );
};

export default Pizzas;
