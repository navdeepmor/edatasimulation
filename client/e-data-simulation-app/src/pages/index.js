import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ShowWork from '../components/ShowWork';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <ShowWork />
            <InfoSection />
        </>
    )
} 

export default Home;