import React, { Component } from 'react'
import { skills } from '../Info'
import { Period } from './Common'

export class Skills extends Component {
    createElements = () => {
        return skills.map((item) => {
            return (
                <div className="row" key={item.location}>
                    <p className="skills-location location title">{item.location}</p>
                    <div className="pair">
                        <span className="skills-title subtitle">{item.title}</span>
                        <Period start={item.period[0]} end={item.period[1]} />
                    </div>
                    <p className="skills-description description">{item.description}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="skills-container">
                <p className="header">Skills</p>
                {this.createElements()}
            </div>
        );
    }
}