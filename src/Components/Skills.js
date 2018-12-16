import React, { Component } from 'react'
import { skills } from '../Info'

export class Skills extends Component {
    createElements = () => {
        return skills.map((item) => {
            return (
                <div className="row" key={item.location}>
                    <p className="skills-location location">{item.location}</p>
                    <p className="skills-title title">{item.title}</p>
                    <p className="skills-period period">{item.period}</p>
                    <p className="skills-description description">{item.description}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="skills-container">
                {this.createElements()}
            </div>
        );
    }
}