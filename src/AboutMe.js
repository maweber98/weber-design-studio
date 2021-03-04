import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import computerCoffee from './images/computerCoffee.jpg'

const AboutMe = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
        <>
    
          <PortfolioStyles />
          <div className="portfolioHeader">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Weber Design Logo" height={"100%"} width={"100%"} />
                </Link>
            </div>
            <div></div>
            <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
            </div>
            </div>
            <div className="aboutMeWrapper">
            <div className="aboutMeContent">
            </div>
            <div className="aboutMeContent">
            </div>
            <div>
                <img src={computerCoffee} style={{objectFit: "contain"}} width="100%" height="100%" alt="coffee and computer"/>
            </div>
            <div className="aboutMeBio" style={{backgroundColor: "white"}}>
                <h1>Mark Weber</h1>
                <p>Resourceful Front End Web Developer with a background in design bringing in-depth knowledge of latest technology trends to produce elegant website design. Experience handling Javascript, HTML and CSS coding to meet organization's front-facing internet needs. Detail-oriented collaboration with others to define project expectations and demand. Hands-on testing and debugging to address and maintain website performance.</p>
            </div>
        </div>
          
        </>
      </ThemeProvider>
    )
}

export default AboutMe