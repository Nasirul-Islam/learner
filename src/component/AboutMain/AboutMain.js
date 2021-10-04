import React from 'react';
import { Container } from 'react-bootstrap';
import useAppdata from '../../hooks/useAppdata';

const AboutMain = (props) => {
    const [datas] = useAppdata();
    return (
        <Container>
            <h1 className="mt-2 mb-4">{datas?.about?.title}</h1>
            <hr />
            <h5 className="mb-4">{datas?.about?.discription}</h5>
        </Container>
    );
};

export default AboutMain;