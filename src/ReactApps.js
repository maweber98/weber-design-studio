import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import expensifyApp from './images/expensifyApp.jpg'
import memeApp from './images/memeGeneratorApp.jpg'
import guitarChordApp from './images/guitarChordApp.jpg'
import officeApp from './images/officeApp.jpg'
import videoSearchApp from './images/videoSearchApp.jpg'
import indecisionApp from './images/indecisionApp.jpg'
import typingApp from './images/typingGame.jpg'
import typingGameStats from './images/typingGameStats.png'
import indecisionAppStats from './images/indecisionAppStats.png'
import officeAppStats from './images/officeAppStats.png'
import memeAppStats from './images/memeAppStats.png'
import youTubeAppStats from './images/youTubeAppStats.png'
import guitarChordStats from './images/guitarChordStats.png'
import expenseAppStats from './images/expenseAppStats.png'

const ReactApps = () => {
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
                <p>Guitar Chord App!</p>
                <a rel="noopener noreferrer" href='https://guitar-chord-app21.herokuapp.com/' target="_blank">
                    <img src={guitarChordApp} alt="guitar chord app" width={"100%"} />
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
                <p>Expense Budget App</p>
                <a rel="noopener noreferrer" href='https://react-expensify20.herokuapp.com/dashboard' target="_blank">
                    <img src={expensifyApp} alt="expensify app" width={"100%"} />
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
                <p>Meme App</p>
                <a rel="noopener noreferrer" href='https://meme-generator20.herokuapp.com/' target="_blank">
                    <img src={memeApp} alt="meme app" width={"100%"} />
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
                <p>Indecision Game App</p>
                <a rel="noopener noreferrer" href='https://react-indecision20.herokuapp.com/' target="_blank">
                    <img src={indecisionApp} alt="indecision app" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={indecisionAppStats} alt="Indecision App Stats" />
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, SCSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="portfolioLinks">
                <p>The Office Game Quiz App</p>
                <a rel="noopener noreferrer" href='https://react-office-app21.herokuapp.com/' target="_blank">
                    <img src={officeApp} alt="office quiz app" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={officeAppStats} alt="Office Game Stats" />
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="portfolioLinks">
                <p>YouTube Video Search App</p>
                <a rel="noopener noreferrer" href='https://video-kirch-ff2aa5.netlify.app/' target="_blank">
                    <img src={videoSearchApp} alt="youtube video search app" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={youTubeAppStats} alt="YouTube App Stats" />
                </div>
                <div className="portfolio_languages_paragraph">
                    <p>Languages / Frameworks: JavaScript, React, React Hooks, CSS, HTML</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="portfolioLinks">
                <p>Typing Game App</p>
                <a rel="noopener noreferrer" href='https://elastic-spence-eb117e.netlify.app/' target="_blank">
                    <img src={typingApp} alt="Typing Game app" width={"100%"} />
                </a>
                <div className="portfolio_languages_graphic">
                    <img src={typingGameStats} alt="Typing Game Stats" />
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

export default ReactApps