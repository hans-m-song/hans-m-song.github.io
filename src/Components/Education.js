import React, { Component } from 'react'
import { education } from '../Info'
import { Period } from './Common'

export class Education extends Component {
    createElements = () => {
        return education.map((item) => {
            return (
                <div className="row" key={item.location}>
                    <p className="education-location location title">{item.location}</p>
                    <div className="pair">
                        <span className="education-certification certification subtitle">{item.certification}</span>
                        <Period start={item.period[0]} end={item.period[1]} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="education-container">
                <p className="header">Education</p>
                {this.createElements()}
            </div>
        );
    }
}