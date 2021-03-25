import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Portfolio from './Portfolio';
import ProductDesign from './ProductDesign';
import LogoDesign from './LogoDesign';
import WebsiteDesign from './WebsiteDesign';
import AboutMe from './AboutMe';
import Quotes from './Quotes';
import Contact from './Contact';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/productdesign" component={ProductDesign} />
      <Route path="/logodesign" component={LogoDesign} />
      <Route path="/websitedesign" component={WebsiteDesign} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/quotes" component={Quotes} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
