import React from "react";
import { Container } from "reactstrap";
import Modal from "./ToppingModal";
import List from "./ToppingList";

const Toppings = () => {
    return (
        <Container>
            <Modal />
            <List />
        </Container>
    );
};

export default Toppings;
