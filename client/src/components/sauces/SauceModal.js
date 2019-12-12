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
import { addSauce } from "../../actions/sauceActions";
import PropTypes from "prop-types";

class SauceModal extends Component {
    state = {
        modal: false,
        name: ""
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

        const newSauce = {
            name: this.state.name
        };

        // Add item via addSauce action
        this.props.addSauce(newSauce);

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
                        Add Sauce
                    </Button>
                ) : (
                    <h4 className="mb-3 ml-4">Please log in to manage items</h4>
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To Sauce List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="crust">Sauce</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="sauce"
                                    placeholder="Add Sauce"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >
                                    Add Sauce
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
    sauce: state.sauce,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addSauce })(SauceModal);
