import React, {Component} from 'react';
import './Blog.css';

import Header from '../Header/Header.js';

export default class Blog extends Component {
    render() {
        return(
            <div>
                <Header />
                <div> Blog </div>
            </div>
        )
    }
}