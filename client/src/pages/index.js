import React, { useState } from 'react'
import CostEvaluation from '../components/cost/CostEvaluation';
import Navbar from '../components/Navbar'
import Section from '../components/Section';
import Sidebar from '../components/Sidebar'
import { priceTable } from '../utils/tempData';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Section />
            <CostEvaluation costData={priceTable}/>
        </>
    )
}

export default Home
