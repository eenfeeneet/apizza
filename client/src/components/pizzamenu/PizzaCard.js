import React, { useState, useEffect } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Col,
    Button
} from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";

import { connect } from "react-redux";
import { getSizes } from "../../actions/sizeActions";
import { getCrusts } from "../../actions/crustActions";

import img from "../../assets/images/pizzalorem.jpg";

const PizzaCard = props => {
    const [activeTab, setActiveTab] = useState("1");
    const { sizes } = props.size;
    const { crusts } = props.crust;

    useEffect(() => {
        props.getSizes();
        props.getCrusts();
    }, []);

    return (
        <Card body outline color="secondary">
            <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.pizza}</CardTitle>
                <CardText>{props.description}</CardText>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        {sizes.map(({ _id, name, price }) => (
                            <option key={_id}>
                                {name}
                                {price}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
            </CardBody>
            <Button block>Button</Button>
        </Card>
    );
};

const mapStateToProps = state => ({
    size: state.size,
    crust: state.crust
});
export default connect(mapStateToProps, { getSizes, getCrusts })(PizzaCard);
