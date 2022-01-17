import React from 'react'
import {Company,HeadSection,Partners,Features} from '../components'
import CTAComponent from '../components/CTAComponent';


const Home = () => {
    return (
        <>
         <HeadSection/>
        <Company/>
        <Partners/>
        <Features/>
        <CTAComponent/>
        </>
    );
};
export default Home;