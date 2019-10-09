import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './container/About';
import Categories from './container/Categories';
import Home from './container/Home';
import Profiles from './container/Profiles';
import ProfileForm from './ui/ProfileForm';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Categories' component={Categories} />
            <Route path='/Home' component={Home} />
            <Route path='/Profiles' component={Profiles} />
            <Route path='/ProfileForm' component={ProfileForm} />
        </ Route >
    </ Router>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
