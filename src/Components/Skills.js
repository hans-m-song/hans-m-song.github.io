import React, { Component } from 'react';
import { skills } from '../Info';


export class Skills extends Component {

  createSkillsList = (item) => {
    return (
      <div className="skill-list">
        {item.list.map(skill => <span className="skill">{skill}</span>)}
      </div>
    );
  }

  createElements = () => {
    return skills.map(item => {
      return (
        <div className="row" key={item.title}>
          <div className="flex">
            <p className="skills-title title">{item.title}</p>
            {this.createSkillsList(item)}
          </div>
          <p className="description">{item.description}</p>
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