import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { connect } from "react-redux";
import { addPizza } from "../../actions/pizzaActions";
import PropTypes from "prop-types";

class PizzaModal extends Component {
    state = {
        modal: false,
        name: "",
        price: ""
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newPizza = {
            name: this.state.name,
            price: this.state.price
        };

        // Add item via addItem action
        this.props.addPizza(newPizza);

        // Close modal
        this.toggle();
    };

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? (
                    <Button
                        color="dark"
                        style={{ marginBottom: "2rem" }}
                        onClick={this.toggle}
                    >
                        Add Pizza
                    </Button>
                ) : (
                    <h4 className="mb-3 ml-4">Please log in to manage items</h4>
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="pizza">Pizza</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="pizza"
                                    placeholder="Add Pizza"
                                    onChange={this.onChange}
                                />

                                <Label for="item">Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Add price"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >
                                    Add Pizza
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pizza: state.pizza,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPizza })(PizzaModal);
