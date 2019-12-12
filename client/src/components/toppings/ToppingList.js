import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getToppings, deleteTopping } from "../../actions/toppingActions";
import PropTypes from "prop-types";

class ToppingList extends Component {
    static propTypes = {
        getToppings: PropTypes.func.isRequired,
        topping: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getToppings();
    }

    onDeleteClick = id => {
        this.props.deleteTopping(id);
    };

    render() {
        const { toppings } = this.props.topping;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {toppings.map(({ _id, name }) => (
                            <CSSTransition
                                key={_id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem>
                                    {this.props.isAuthenticated ? (
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(
                                                this,
                                                _id
                                            )}
                                        >
                                            &times;
                                        </Button>
                                    ) : null}
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    topping: state.topping,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getToppings, deleteTopping })(
    ToppingList
);
