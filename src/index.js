import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Portfolio from './Portfolio'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
