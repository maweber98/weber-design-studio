import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { PortfolioStyles } from './portfolioTheme';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {Link } from "react-router-dom";
import logo from './images/WeberDesignLogo.svg'
import backgroundImage from './images/quoteBackground.jpg'
import axios from "axios";

const Quotes = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
   
    useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    const getQuote = {
      method: 'GET',
      url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
      params: {token: 'ipworld.info'},
      headers: {
        'x-rapidapi-key': 'c41bf5f445msh17c9e5411b15303p1eca01jsn924505c55214',
        'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
      }
    };
    
    axios.request(getQuote).then(function (response) {
      console.log(response.data);
      setQuote(response.data.text);
      setAuthor(response.data.author);
    }).catch(function (error) {
      console.error(error);
    });

  },[]);

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
              <div className="aboutMeContent">
              </div>
              <div className="aboutMeContent">
              </div>
              <img src={backgroundImage} style={{opacity:  0.3, objectFit: "contain", position:"relative", zIndex:"-1"}} width="100%" height="100%" alt="trees"/>
              <div className="centered">
                <h2>Quote of the day</h2>
                <p>"{quote}" - {author}</p>
              </div>
          </div>
          
        </>
      </ThemeProvider>
    )
}

export default Quotes