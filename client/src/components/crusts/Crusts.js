import React from "react";
import { Container } from "reactstrap";
import Modal from "./CrustModal";
import List from "./CrustList";

const Crusts = () => {
    return (
        <Container>
            <Modal />
            <List />
        </Container>
    );
};

export default Crusts;
