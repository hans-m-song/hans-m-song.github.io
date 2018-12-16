import React, { Component } from 'react'
import { education } from '../Info'

export class Education extends Component {
    createElements = () => {
        return education.map((item) => {
            return (
                <div className="row" key={item.location}>
                    <p className="education-location location">{item.location}</p>
                    <p className="education-certification certification">{item.certification}</p>
                    <p className="education-period period">{item.period}</p>
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