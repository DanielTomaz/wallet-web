import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';

import Login from './pages/Login';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" component={Login} exact/>
  </Switch>
  <GlobalStyle />
</BrowserRouter>,

 // <React.StrictMode>
   // <App />
 // </React.StrictMode>
  document.getElementById('root')
);


