import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const AboutMain = (props) => {
    const [datas, setDatas] = useState();
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDatas(data.about))
    }, [])
    return (
        <Container>
            <h1 className="mt-2 mb-4">{datas?.title}</h1>
            <hr />
            <h5 className="mb-4">{datas?.discription}</h5>
        </Container>
    );
};

export default AboutMain;