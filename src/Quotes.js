import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import treePath from './images/treePath.jpg'

const Quotes = () => {
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
            <div className="quoteWrapper">
            <div className="quoteContent">
            </div>
            <div className="quoteContent">
            </div>
            <div>
                <img src={treePath} style={{opacity:  0.3, objectFit: "contain", position:"relative", zIndex:"-1"}} width="100%" height="100%" alt="trees"/>
            </div>
            <div className="quoteText">
                <h2>Quote of the day</h2>
                <p>“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe</p>
            </div>
        </div>
          
        </>
      </ThemeProvider>
    )
}

export default Quotes