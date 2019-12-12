import React, { Component } from "react";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import "./App.css";

class Customer extends Component {
    render() {
        return (
            <Container>
                <ItemModal />
                <ShoppingList />
            </Container>
        );
    }
}

export default Customer;
