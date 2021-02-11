import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Quotes from './Quotes';
import Contact from './Contact';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/quotes" component={Quotes} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
