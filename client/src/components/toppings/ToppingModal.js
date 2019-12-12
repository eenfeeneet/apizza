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
import { addTopping } from "../../actions/toppingActions";
import PropTypes from "prop-types";

class ToppingModal extends Component {
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

        const newTopping = {
            name: this.state.name,
            price: this.state.price
        };

        // Add topping via addTopping action
        this.props.addTopping(newTopping);

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
                        Add Topping
                    </Button>
                ) : (
                    <h4 className="mb-3 ml-4">Please log in to manage items</h4>
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To Topping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="topping">Topping</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="topping"
                                    placeholder="Add Topping"
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
                                    Add Topping
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
    topping: state.topping,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addTopping })(ToppingModal);
