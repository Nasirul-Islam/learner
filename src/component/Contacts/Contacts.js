import React from 'react';
import './Contact.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Contacts = () => {
    const [datas, setDatas] = useState();
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDatas(data.contact))
    }, [])
    return (
        <Container>
            <div className="text-center">
                <h1 className="text-success">{datas?.title}</h1>
                <h3 className="text-success">{datas?.discription}</h3>
            </div>
            <Row xs={1} md={2} className="g-4 my-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={datas?.img} height="400px" />
                    </Card>
                </Col>
                <Col>
                    <Card className="contactField">
                        <input type="text" placeholder="Type Your Name" />
                        <br />
                        <input type="text" placeholder="Type Your Email" />
                        <br />
                        <textarea name="code" id="" cols="20" rows="5" placeholder="ُType Your Comment"></textarea>
                        <br />
                        <Button variant="info" className="py-2 fw-bold fs-4 text-light">Send</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;