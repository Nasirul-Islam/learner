import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const ServiceMain = () => {
    const [datas, setDatas] = useState();
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDatas(data.serviceMain))
    }, [])
    return (
        <Container className="my-2">
            <div className="text-center">
                <h1 className="text-success">Our All Services</h1>
            </div>
            <Row xs={1} md={3} className="g-4 my-3">
                {
                    datas?.map(data =>
                        <Course
                            key={data.id} data={data}>
                        </Course>)
                }
            </Row>
        </Container>
    );
};

export default ServiceMain;