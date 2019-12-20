import React, {Component} from 'react';
import './Header.css';

import PDF from '../resume.pdf';

export default class Header extends Component {
    render() {
        return(
            <header className="App-header">
            <div className="Header-opts">
                <a href="/"
                    className="Header-option"
                    target="_self"
                    rel="noopener noreferrer"
                > Landing </a>
                <a href="/experience"
                   className="Header-option"
                   target="_self"
                   rel="noopener noreferrer"
                > Experience </a>
                <a href="/blog"
                   className="Header-option"
                   target="_self"
                   rel="noopener noreferrer"
                > Blog </a>
                <a href= {PDF}
                   className="Header-option"
                   target="_self"
                   rel="noopener noreferrer"
                   download="Manish Rao Resume"
                > Resume </a>
                <a href="/contact"
                   className="Header-option"
                   target="_self"
                   rel="noopener noreferrer"
                > Contact </a>
            </div>    
            </header>
        )
    }
}