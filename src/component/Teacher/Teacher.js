import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SIr from '../Sir/SIr';

const Teacher = (props) => {
    const { datas } = props
    return (
        <div>
            <Container className="my-5">
                <div className="text-center">
                    <h1 className="text-success">AWESOME TEACHERS</h1>
                    <h3>Here are the most popular teachers in our organization</h3>
                </div>
                <Row xs={1} md={4} className="g-2 my-3">
                    {
                        datas?.map(data =>
                            <SIr
                                key={data.id} data={data}>
                            </SIr>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Teacher;