import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getSauces, deleteSauce } from "../../actions/sauceActions";
import PropTypes from "prop-types";

class SauceList extends Component {
    static propTypes = {
        getSauces: PropTypes.func.isRequired,
        sauce: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getSauces();
    }

    onDeleteClick = id => {
        this.props.deleteSauce(id);
    };

    render() {
        const { sauces } = this.props.sauce;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {sauces.map(({ _id, name }) => (
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
    sauce: state.sauce,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getSauces, deleteSauce })(SauceList);
