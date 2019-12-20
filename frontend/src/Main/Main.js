import React, {Component} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';

import Landing from '../Landing/Landing.js';
import Contact from '../Contact/Contact.js';
import Experience from '../Experience/Experience.js';
import Blog from '../Blog/Blog.js';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Landing />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route exact path='/experience'>
                        <Experience />
                    </Route>
                    <Route exact path='/blog'>
                        <Blog />
                    </Route>
                </Switch>
            </Router>
        )
    }
}