import React, {Component} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';

import Landing from '../Landing/Landing.js';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        )
    }
}