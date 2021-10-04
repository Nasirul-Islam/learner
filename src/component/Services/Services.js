import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Services = (props) => {
    const { datas } = props
    return (
        <Container className="my-5">
            <div className="text-center">
                <h1 className="text-success">Our Services</h1>
            </div>
            <Row xs={1} md={2} className="g-4 my-3">
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

export default Services;