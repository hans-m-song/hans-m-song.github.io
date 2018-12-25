import React, { Component } from 'react';
import github from '../media/github.png';
import linkedin from '../media/linkedin.png'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-container row">
                <a href="https://github.com/hans-m-song">
                    <img 
                        alt="GitHub"
                        src={github}
                    />
                </a>
                <a href="https://www.linkedin.com/in/hans-song-399b62123/">
                    <img 
                        alt="LinkedIn"
                        src={linkedin} 
                    />
                </a>
            </div>
        );
    }
}