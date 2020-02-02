import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userForm from './UserForm';
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<Router>
        <Route path="/userForm/:type" component={ userForm } />
    <Route path="/" exact  component={ App } />
</Router>, document.getElementById('root'));
serviceWorker.unregister();
