import React from 'react';
import './Contact.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAppdata from '../../hooks/useAppdata';

const Contacts = () => {
    const [datas] = useAppdata();
    return (
        <Container>
            <div className="text-center">
                <h1 className="text-success">{datas?.contact?.title}</h1>
                <h3 className="text-success">{datas?.contact?.discription}</h3>
            </div>
            <Row xs={1} md={2} className="g-4 my-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={datas?.contact?.img} height="400px" />
                    </Card>
                </Col>
                <Col>
                    <Card style={{ border: "0" }} className="contactField">
                        <input type="text" placeholder="Type Your Name" />
                        <br />
                        <input type="text" placeholder="Type Your Email" />
                        <br />
                        <textarea name="code" id="" cols="20" rows="5" placeholder="Type Your Comment"></textarea>
                        <br />
                        <Button variant="info" className="py-2 fw-bold fs-4 text-light">Send</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;