import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg';
import productLogoButton from './images/productLogoButton.svg';
import websiteDesignButton from './images/websiteDesignButton.svg';
import spaReactButton from './images/spaReactButton.svg';

const Portfolio = () => {
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
            <div className="portfolioWrapper" paddingTop={"50%"}>
            <div className="portfolioLinks">
                {/* <p>Product &amp; Logo Design</p> */}
                    <Link to="/productdesign">
                        <img src={productLogoButton} alt="Product and Logo Design" width={"70%"} />
                    </Link>
                <div className="portfolio_languages_paragraph">
                    {/* <p>Product and logo designs</p> */}
                </div>
            </div>
            <div className="portfolioLinks">
                {/* <p>Website Design</p> */}
                    <Link to="/websitedesign">
                        <img src={websiteDesignButton} alt="Website Design" width={"50%"} />
                    </Link>
                <div className="portfolio_languages_paragraph">
                    {/* <p>Website design</p> */}
                </div>
            </div>
            <div className="portfolioLinks">
                {/* <p>React Apps</p> */}
                    <Link to="/reactapps">
                        <img src={spaReactButton} alt="React Apps" width={"70%"} />
                    </Link>
                <div className="portfolio_languages_paragraph">
                    {/* <p>Single Page Apps built on React framework</p> */}
                </div>
            </div>
        </div>
          
        </>
      </ThemeProvider>
    )
}

export default Portfolio