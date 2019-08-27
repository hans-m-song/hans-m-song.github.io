import React, { Component } from 'react';
import { experience } from '../Info';
import { Period } from './Common';

export class Experience extends Component {
    createSkillList = (item) => {
        return (
            <div className="skill-list">
                {item.skills.map(skill => <span className="skill">{skill}</span>)}
            </div>
        );
    }

    createElements = () => {
        return experience.map((item) => {
            return (
                <div className="row" key={item.location}>
                    <p className="experience-location title">{item.location}</p>
                    <div className="flex">
                        <span className="experience-title subtitle">{item.title}</span>
                        <Period start={item.period[0]} end={item.period[1]} />
                    </div>
                    {this.createSkillList(item)}
                    <p className="experience-description description">{item.description}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="experience-container">
                <p className="header">Experience</p>
                {this.createElements()}
            </div>
        );
    }
}