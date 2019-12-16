import React, { useState, useEffect } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Badge,
  Button
} from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';

import img from '../../assets/images/pizzalorem.jpg';

const PizzaCard = props => {
  const [orderPrice, setOrderPrice] = useState({
    type: 0,
    size: 0,
    crust: 0,
    toppings: 0,
    total: 0
  });
  const [typePrice, setTypePrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [crustPrice, setCrustPrice] = useState(0);
  const [toppingsPrice, setToppingsPrice] = useState(0);
  const [toppings, setToppings] = useState(['yay', 'bee', 'see']);
  const [totalPrice, setTotalPrice] = useState(0);
  const [order, setOrder] = useState({
    pizza: null,
    type: null,
    size: null,
    crust: null,
    additionals: null,
    price: null
  });

  const { name, type, description, price } = props.pizza;

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

  const checkPizzaType = () => {
    if (type === 'Classic') {
      console.log('set', type);
      setTypePrice(price);
      setTotalPrice(price);
    } else if (type === 'Specialty') {
      console.log('set', type);
      setTypePrice(price);
      setTotalPrice(price);
    }
  };
  useEffect(() => {
    setOrder({
      pizza: props.pizza
    });
    checkPizzaType();
  }, []);
  useEffect(() => {
    updateTotalPrice();
    console.log('updated');
  }, [typePrice, sizePrice, crustPrice, toppingsPrice]);

  const checkPrice = e => {
    console.log('pizza', order.pizza);
    console.log('type:', typePrice);
    console.log('size:', sizePrice);
    console.log('crust:', crustPrice);
    console.log('toppings:', toppingsPrice);
    console.log('total:', totalPrice);
  };
  const updateTotalPrice = () => {
    const total = typePrice + sizePrice + crustPrice + toppingsPrice;
    setTotalPrice(total);
  };
  const updateSizePrice = newValue => {
    setSizePrice(newValue);
  };
  const updateCrustPrice = newValue => {
    setCrustPrice(newValue);
  };
  const handleSizeChange = e => {
    console.log('selected', e.target.name);
    const newSizePrice = parseFloat(e.target.value);

    setSizePrice(newSizePrice);
    // updateSizePrice(newSizePrice);
    // updateTotalPrice();
  };
  const handleCrustChange = e => {
    console.log('selected', e.target.name);
    const newCrustPrice = parseFloat(e.target.value);

    setCrustPrice(newCrustPrice);
  };
  const handleToppingChange = e => {
    console.log('selected', e.target.name);
    const addTopping = parseFloat(e.target.value);

    // setCrustPrice(newCrustPrice);
  };

  return (
    <Card body outline color='secondary' width='25%'>
      <CardImg top width='100%' src={img} alt='Card image cap' />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <FormGroup>
          <Input type='select' name='size' onChange={handleSizeChange}>
            <option>Select Size</option>
            {props.sizes.map(size => (
              <option key={size._id} value={size.price}>
                {size.name}
              </option>
            ))}
          </Input>
          <Input type='select' name='crust' onChange={handleCrustChange}>
            <option>Select Crust</option>
            {props.crusts.map(crust => (
              <option key={crust._id} value={crust.price}>
                {crust.name}
              </option>
            ))}
          </Input>
          <Input type='select' name='crust' onChange={handleCrustChange}>
            <option>Additional Toppings</option>
            {props.toppings.map(topping => (
              <option key={topping._id} value={topping.price}>
                {topping.name}
              </option>
            ))}
          </Input>

          <div className='d-flex'>
            {toppings.map(topping => (
              <h5>
                <Badge color='secondary' pill>
                  {topping} <Button close />
                </Badge>
              </h5>
            ))}
          </div>
        </FormGroup>
      </CardBody>
      <Button onClick={checkPrice} block>
        {totalPrice}
      </Button>
    </Card>
  );
};

export default PizzaCard;
