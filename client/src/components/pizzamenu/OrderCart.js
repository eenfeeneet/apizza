import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Badge,
  Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { addOrder } from '../../actions/orderActions';

const OrderCart = props => {
  useEffect(() => {
    console.log(props);
  }, []);

  // useEffect(() => {
  //     setOrder({
  //         pizza: null,
  //         type: null,
  //         size: null,
  //         crust: null,
  //         additionals: null,
  //         price: null
  //     });
  //     // console.log(props.pizza);
  // }, []);

  return (
    <Card body outline color='secondary' width='25%'>
      <CardBody>
        <CardTitle>
          <h3>Order Cart</h3>
        </CardTitle>
        <ListGroup>
          <ListGroupItem className='justify-content-between'>
            Cras justo odio <Badge pill>14</Badge>
          </ListGroupItem>
          <ListGroupItem className='justify-content-between'>
            Dapibus ac facilisis in <Badge pill>2</Badge>
          </ListGroupItem>
          <ListGroupItem className='justify-content-between'>
            Morbi leo risus <Badge pill>1</Badge>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <Button block>Place Order</Button>
    </Card>
  );
};
const mapStateToProps = state => ({
  pizza: state.pizza,
  size: state.size,
  crust: state.crust,
  topping: state.topping
});
export default connect(mapStateToProps, { addOrder })(OrderCart);
