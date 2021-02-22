import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import button from './images/PortfolioButton.svg'

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
    <>

      <GlobalStyles />
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Weber Design" height={"100%"} width={"100%"} />
          </Link>
        </div>
        <div></div>
        <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
        </div>
        <div></div>
        <div className="introText">Hello! I’m Mark Weber, a design oriented front end web developer. I strive to develop well thought out elegant web applications with clean well crafted code.</div>
        <div></div>
        <div></div>
        <div className="portfolioButton">
          <Link to="/portfolio">
            <img src={button} alt="Portfolio Button" height={"70%"} width={"70%"}/>
          </Link>
        </div>
        <div></div>
    </div>
      
    </>
  </ThemeProvider>
  );
}

export default App;
