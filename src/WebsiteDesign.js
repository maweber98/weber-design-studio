import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import webersLanscaping from './images/webersLanscaping.jpg'
import landscapingStats from './images/landscapingStats.png'

const WebsiteDesign = () => {
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
            </div>
            <div className="portfolioWrapper">
            <div className="portfolioLinks">
                <p>Website Design</p>
                <a rel="noopener noreferrer" href='https://webers-landscaping.netlify.app/' target="_blank">
                    <img src={webersLanscaping} alt="Weber's Landscaping" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={landscapingStats} alt="Weber's Landscaping Site"/>
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
          
        </>
      </ThemeProvider>
    )
}

export default WebsiteDesign