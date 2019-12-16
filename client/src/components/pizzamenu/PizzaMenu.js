import React, { Component } from 'react';
import { Container, Col, Row, CardColumns } from 'reactstrap';
import { connect } from 'react-redux';
import { getPizzas } from '../../actions/pizzaActions';
import { getSizes } from '../../actions/sizeActions';
import { getCrusts } from '../../actions/crustActions';
import { getToppings } from '../../actions/toppingActions';
import PropTypes from 'prop-types';

import PizzaCard from './PizzaCard';
import OrderCart from './OrderCart';

class PizzaMenu extends Component {
  state = {
    order: {
      pizza: 'lalalal',
      type: 'lalalal',
      size: 'lalalal',
      crust: 'lalalal',
      additionals: 'lalalal',
      price: 'lalalal'
    }
  };
  static propTypes = {
    getPizzas: PropTypes.func.isRequired,
    pizza: PropTypes.object.isRequired,
    getSizes: PropTypes.func.isRequired,
    size: PropTypes.object.isRequired,
    getCrusts: PropTypes.func.isRequired,
    crust: PropTypes.object.isRequired,
    getToppings: PropTypes.func.isRequired,
    topping: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.getPizzas();
    this.props.getSizes();
    this.props.getCrusts();
    this.props.getToppings();
  }
  getSizeAndCrustOptions = (sizes, crusts) => {
    let options = [];
    sizes.map(size => {
      crusts.map(crust => {
        let x = {};
        x.name = size.name + ' ' + crust.name;
        x.price = size.price + crust.price;
        options.push(x);
      });
    });
    return options;
  };
  addToCart = newOrder => {
    this.setState(prevState => ({
      order: newOrder
    }));
  };

  render() {
    const { pizzas } = this.props.pizza;
    const { sizes } = this.props.size;
    const { crusts } = this.props.crust;
    const { toppings } = this.props.topping;

    const options = this.getSizeAndCrustOptions(sizes, crusts);
    // console.log(options);
    return (
      <Container fluid>
        <Row>
          <Col lg='9'>
            <CardColumns>
              {pizzas.map(pizza => (
                <PizzaCard
                  key={pizza._id}
                  pizza={pizza}
                  sizes={sizes}
                  crusts={crusts}
                  toppings={toppings}
                />
              ))}
            </CardColumns>
          </Col>
          <Col lg='3'>
            <OrderCart order={this.state.order} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pizza: state.pizza,
  size: state.size,
  crust: state.crust,
  topping: state.topping
});

export default connect(mapStateToProps, {
  getPizzas,
  getSizes,
  getCrusts,
  getToppings
})(PizzaMenu);
