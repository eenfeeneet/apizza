import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import PizzaMenu from './components/pizzamenu/PizzaMenu';

class Home extends Component {
  render() {
    return (
      <Container className='col-10'>
        <Jumbotron>
          <h1 className='display-3'>Pizza Ordering System</h1>
          <p className='lead'>
            Register and Login to create Pizza Ingredients and Display on Home
            Page
          </p>

          <p className='lead'>
            <Button color='primary'>Learn More</Button>
          </p>
        </Jumbotron>
        <PizzaMenu />
      </Container>
    );
  }
}

export default Home;
