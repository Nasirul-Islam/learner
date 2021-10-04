import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SIr = (props) => {
    const { name, discription, img } = props.data
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height="300px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {discription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SIr;