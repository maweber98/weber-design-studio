import React from 'react';
import {Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import button from './images/PortfolioButton.svg'

function App() {
  return (
    <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="Weber Design Logo" height={"75%"} width={"75%"} />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className="introText">Hello! I’m Mark Weber, a design oriented front end web developer. I strive to develop well thought out elegent web applications with clean well crafted code.</div>
        <div></div>
        <div></div>
        <div className="portfolioButton">
          <Link to="/portfolio">
            <img src={button} alt="Portfolio Button" height={"70%"} width={"70%"}/>
          </Link>
        </div>
        <div></div>
    </div>
  );
}

export default App;
