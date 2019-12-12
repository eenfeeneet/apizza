import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getPizzas, deletePizza } from "../../actions/pizzaActions";
import PropTypes from "prop-types";

class PizzaList extends Component {
    static propTypes = {
        getPizzas: PropTypes.func.isRequired,
        pizza: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getPizzas();
    }

    onDeleteClick = id => {
        this.props.deletePizza(id);
    };

    render() {
        const { pizzas } = this.props.pizza;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {pizzas.map(({ _id, name }) => (
                            <CSSTransition
                                key={_id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem>
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
    pizza: state.pizza,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPizzas, deletePizza })(PizzaList);
