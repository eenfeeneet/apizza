import React from "react";
import { Container } from "reactstrap";
import Modal from "./SauceModal";
import List from "./SauceList";

const Sauces = () => {
    return (
        <Container>
            <Modal />
            <List />
        </Container>
    );
};

export default Sauces;
