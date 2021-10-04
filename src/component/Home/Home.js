import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Services from '../Services/Services';
import Teacher from '../Teacher/Teacher';

const Home = () => {
    const [datas, setDatas] = useState();
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDatas(data.service))
    }, [])
    return (
        <div>
            <Services datas={datas}></Services>
            <Teacher datas={datas}></Teacher>
        </div>
    );
};

export default Home;