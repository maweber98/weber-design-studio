import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import expensifyApp from './images/expensifyApp.jpg'

const Portfolio = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
        <>
    
          <PortfolioStyles />
          <div className="portfolioWrapper">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Weber Design Logo" height={"75%"} width={"75%"} />
                </Link>
            </div>
            <div></div>
            <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
            </div>
            <div className="portfolioLinks">
                <a rel="noopener noreferrer" href='https://guitar-chord-app21.herokuapp.com/' target="_blank">
                    <img src={expensifyApp} alt="guitar chord app" height={"50%"} width={"50%"} />
                </a>
            </div>
            <div className="portfolioLinks">
                <a rel="noopener noreferrer" href='https://react-expensify20.herokuapp.com/dashboard' target="_blank">
                    <img src={expensifyApp} alt="expensify app" height={"50%"} width={"50%"} />
                </a>
            </div>
            <div className="portfolioLinks">
                <a rel="noopener noreferrer" href='https://meme-generator20.herokuapp.com/' target="_blank">
                    <img src={expensifyApp} alt="meme app" height={"50%"} width={"50%"} />
                </a>
            </div>
            <div className="portfolioLinks">
                <a rel="noopener noreferrer" href='https://react-indecision20.herokuapp.com/' target="_blank">
                    <img src={expensifyApp} alt="indecision app" height={"50%"} width={"50%"} />
                </a>
            </div>
            <div className="portfolioLinks">
                <a rel="noopener noreferrer" href='https://react-office-app21.herokuapp.com/' target="_blank">
                    <img src={expensifyApp} alt="office quiz app" height={"50%"} width={"50%"} />
                </a>
            </div>
            <div className="portfolioLinks">
                <a rel="noopener noreferrer" href='https://video-search-app20.herokuapp.com/' target="_blank">
                    <img src={expensifyApp} alt="youtube video search app" height={"50%"} width={"50%"} />
                </a>
            </div>
        </div>
          
        </>
      </ThemeProvider>
    )
}

export default Portfolio