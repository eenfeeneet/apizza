import React, { Component, useState } from 'react';
import classnames from 'classnames';

import { Container } from 'reactstrap';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Row,
  Col
} from 'reactstrap';

import './App.css';

import Pizzas from './components/pizzas/Pizzas';
import Crusts from './components/crusts/Crusts';
import Sauces from './components/sauces/Sauces';
import Toppings from './components/toppings/Toppings';

const Admin = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === '1'
            })}
            onClick={() => {
              toggle('1');
            }}
          >
            Pizzas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === '2'
            })}
            onClick={() => {
              toggle('2');
            }}
          >
            Crusts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === '3'
            })}
            onClick={() => {
              toggle('3');
            }}
          >
            Sauces
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === '4'
            })}
            onClick={() => {
              toggle('4');
            }}
          >
            Toppings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: activeTab === '5'
            })}
            onClick={() => {
              toggle('5');
            }}
          >
            Items
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='6'>
              <Card body>
                <Pizzas />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId='2'>
          <Row>
            <Col sm='6'>
              <Card body>
                <Crusts />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col sm='6'>
              <Card body>
                <Sauces />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='4'>
          <Row>
            <Col sm='6'>
              <Card body>
                <Toppings />
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default Admin;
