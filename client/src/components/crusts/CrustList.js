import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getCrusts, deleteCrust } from "../../actions/crustActions";
import PropTypes from "prop-types";

class CrustList extends Component {
    static propTypes = {
        getCrusts: PropTypes.func.isRequired,
        crust: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getCrusts();
    }

    onDeleteClick = id => {
        this.props.deleteCrust(id);
    };

    render() {
        const { crusts } = this.props.crust;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {crusts.map(({ _id, name }) => (
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
    crust: state.crust,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getCrusts, deleteCrust })(CrustList);
