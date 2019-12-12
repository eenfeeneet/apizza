import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Jumbotron, Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";

import { getItems } from "./actions/itemActions";
import PropTypes from "prop-types";

import PizzaMenu from "./components/pizzamenu/PizzaMenu";

class Home extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    };

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">
                        This is a simple hero unit, a simple Jumbotron-style
                        component for calling extra attention to featured
                        content or information.
                    </p>
                    <hr className="my-2" />
                    <p>
                        It uses utility classes for typography and spacing to
                        space content out within the larger container.
                    </p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <PizzaMenu />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(Home);
