import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Section from '../components/Section';
import Sidebar from '../components/Sidebar'

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
        </>
    )
}

export default Home
