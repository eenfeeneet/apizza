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
import { addCrust } from "../../actions/crustActions";
import PropTypes from "prop-types";

class CrustModal extends Component {
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

        const newCrust = {
            name: this.state.name
        };

        // Add crust via addCrust action
        this.props.addCrust(newCrust);

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
                        Add Crust
                    </Button>
                ) : (
                    <h4 className="mb-3 ml-4">Please log in to manage items</h4>
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To Crust List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="crust">Crust</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="crust"
                                    placeholder="Add Crust"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >
                                    Add Crust
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
    crust: state.crust,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addCrust })(CrustModal);
