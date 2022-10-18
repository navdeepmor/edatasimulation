import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY > 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: scrollNav ? 'black' : '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo scrollNav={scrollNav} to='/' onClick={toggleHome}> edata </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> About </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Discover </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Career </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contactus' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Contact Us </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;