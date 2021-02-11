import React from 'react';
import {Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/aboutme" tabIndex={tabIndex}>
      {/* <a href="/" tabIndex={tabIndex}> */}
        <span aria-hidden="true"></span>
        About Me
      {/* </a> */}
      </Link>
      <Link to="/quotes" tabIndex={tabIndex}>
      {/* <a href="/quotes" tabIndex={tabIndex}> */}
        <span aria-hidden="true"></span>
        Inspiration
      {/* </a> */}
      </Link>
      {/* <Link to="/contact" tabIndex={tabIndex}> */}
      <a href="mailto:weberdesignstudio@gmail.com" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Contact Me
      </a>
      {/* </Link> */}
      <Link to="/" tabIndex={tabIndex}>
      {/* <a href="/" tabIndex={tabIndex}> */}
        <span aria-hidden="true"></span>
        Home
      {/* </a> */}
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
