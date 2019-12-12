import React, { Component } from "react";
import { Container, CardGroup, CardColumns } from "reactstrap";
import { connect } from "react-redux";
import { getPizzas } from "../../actions/pizzaActions";
import PropTypes from "prop-types";

import PizzaCard from "./PizzaCard";

class PizzaMenu extends Component {
    state = {
        name: ""
    };
    componentDidMount() {
        this.props.getPizzas();
    }
    static propTypes = {
        getPizzas: PropTypes.func.isRequired,
        pizza: PropTypes.object.isRequired
    };

    render() {
        const { pizzas } = this.props.pizza;
        return (
            <Container>
                <CardColumns>
                    {pizzas.map(({ _id, name, description }) => (
                        <PizzaCard
                            key={_id}
                            pizza={name}
                            description={description}
                        />
                    ))}
                </CardColumns>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    pizza: state.pizza
});

export default connect(mapStateToProps, { getPizzas })(PizzaMenu);
