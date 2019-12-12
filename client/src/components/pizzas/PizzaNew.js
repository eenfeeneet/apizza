import React, { Component, useState } from "react";
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardTitle, CardBody } from "reactstrap";

import { connect } from "react-redux";
import { addPizza } from "../../actions/pizzaActions";

const PizzaNew = () => {
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState();

    const onCheckboxBtnClick = selected => {
        const index = ingredients.indexOf(selected);
        if (index < 0) {
            ingredients.push(selected);
        } else {
            ingredients.splice(index, 1);
        }
        setIngredients([...ingredients]);
    };

    const onChange = e => {
        setName(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        const newPizza = {
            name: name,
            ingredients: ingredients
        };

        // Add item via addItem action
        this.props.addPizza(newPizza);
    };

    return (
        <Card>
            <CardTitle>Create a Pizza</CardTitle>
            <CardBody>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="pizza">Name of Pizza</Label>
                        <Input
                            type="text"
                            name="name"
                            id="pizza"
                            placeholder="Add Pizza"
                            onChange={onChange}
                        />

                        <ButtonGroup>
                            <Button
                                color="primary"
                                onClick={() => onCheckboxBtnClick(1)}
                                active={ingredients.includes(1)}
                            >
                                One
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => onCheckboxBtnClick(2)}
                                active={ingredients.includes(2)}
                            >
                                Two
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => onCheckboxBtnClick(3)}
                                active={ingredients.includes(3)}
                            >
                                Three
                            </Button>
                        </ButtonGroup>
                        <Button
                            color="dark"
                            style={{ marginTop: "2rem" }}
                            block
                        >
                            Add Pizza
                        </Button>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
};

const mapStateToProps = state => ({
    pizza: state.pizza,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPizza })(PizzaNew);
