import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import sublimeLogo from './images/sublimeLogo.png'
import sublimePackaging from './images/sublimePackaging.jpg'
import collarCentralLogo from './images/collarCentralLogo.png'
import petAttirePatterns from './images/petAttirePatterns.jpg'
import K9ExplorerLogo from './images/K9ExplorerLogo.png'
import K9ExplorerPackaging from './images/K9ExplorerPackaging.jpg'

const ProductDesign = () => {
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
                <p>K9 Explorer Logo</p>
                <a rel="noopener noreferrer" href='https://guitar-chord-app21.herokuapp.com/' target="_blank">
                    <img src={K9ExplorerLogo} alt="K9 Explorer Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_paragraph">
                    <p>Logo design for new product line.</p>
                </div>
            </div>
            <div className="portfolioLinks">
                <p>Sublime Logo</p>
                <a rel="noopener noreferrer" href='https://react-expensify20.herokuapp.com/dashboard' target="_blank">
                    <img src={sublimeLogo} alt="Sublime Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_paragraph">
                    <p>Logo design for new product line.</p>
                </div>
            </div>
            <div className="portfolioLinks">
                <p>Collar Central Logo</p>
                <a rel="noopener noreferrer" href='https://meme-generator20.herokuapp.com/' target="_blank">
                    <img src={collarCentralLogo} alt="Collar Central Logo" width={"100%"} />
                </a>
                <div className="portfolio_languages_paragraph">
                    <p>Logo design for new product line.</p>
                </div>
            </div>
            <div className="portfolioLinks">
                <p>K9 Explorer Packaging</p>
                <a rel="noopener noreferrer" href='https://guitar-chord-app21.herokuapp.com/' target="_blank">
                    <img src={K9ExplorerPackaging} alt="K9 Explorer Packaging" width={"100%"} />
                </a>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, Node.js, React, React Hooks, CSS, HTML</p>
                </div>
            </div>
            <div className="portfolioLinks">
                <p>Sublime Packaging</p>
                <a rel="noopener noreferrer" href='https://guitar-chord-app21.herokuapp.com/' target="_blank">
                    <img src={sublimePackaging} alt="Sublime Packaging" width={"100%"} />
                </a>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, Node.js, React, React Hooks, CSS, HTML</p>
                </div>
            </div>
            <div className="portfolioLinks">
                <p>Pet Attire Styles</p>
                <a rel="noopener noreferrer" href='https://meme-generator20.herokuapp.com/' target="_blank">
                    <img src={petAttirePatterns} alt="Pet Attire Patterns" width={"100%"} />
                </a>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, HTML</p>
                </div>
            </div>
        </div>
          
        </>
      </ThemeProvider>
    )
}

export default ProductDesign