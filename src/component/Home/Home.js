import React from 'react';
import useAppdata from '../../hooks/useAppdata';
import Services from '../Services/Services';
import Teacher from '../Teacher/Teacher';

const Home = () => {
    const [datas] = useAppdata();
    return (
        <div>
            {/* Here is Services Component */}
            <Services datas={datas?.service}></Services>
            {/* Here is Teacher Component */}
            <Teacher datas={datas?.teachers}></Teacher>
        </div>
    );
};

export default Home;