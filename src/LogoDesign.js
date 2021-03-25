import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import memeAppStats from './images/memeAppStats.png'
import guitarChordStats from './images/guitarChordStats.png'
import expenseAppStats from './images/expenseAppStats.png'
import k9ExplorerLogo from './images/K9ExplorerLogo.png'
import webersLogo from './images/webersLogo.png'
import sublimeLogo from './images/sublimeLogo.png'
import collarCentralLogo from './images/collarCentralLogo.png'

const LogoDesign = () => {
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
                <p>K9 Explorer</p>
                <a rel="noopener noreferrer" href='https://guitar-chord-app21.herokuapp.com/' target="_blank">
                    <img src={k9ExplorerLogo} alt="K9 Exploerer Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={guitarChordStats} alt="Guitar Chord App Stats"/>
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, Node.js, React, React Hooks, CSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="portfolioLinks">
                <p>Weber's Landscaping</p>
                <a rel="noopener noreferrer" href='https://react-expensify20.herokuapp.com/dashboard' target="_blank">
                    <img src={webersLogo} alt="Weber's Landscaping Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={expenseAppStats} alt="Expense App Stats" />
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, SCSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="portfolioLinks">
                <p>Sublime</p>
                <a rel="noopener noreferrer" href='https://meme-generator20.herokuapp.com/' target="_blank">
                    <img src={sublimeLogo} alt="Sublime Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={memeAppStats} alt="Meme App Stats" />
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="portfolioLinks">
                <p>Collar Central</p>
                <a rel="noopener noreferrer" href='https://meme-generator20.herokuapp.com/' target="_blank">
                    <img src={collarCentralLogo} alt="Collar Central Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={memeAppStats} alt="Meme App Stats" />
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

export default LogoDesign