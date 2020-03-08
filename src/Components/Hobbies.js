import React, {Component} from 'react';
import {hobbies} from '../Info';

export class Hobbies extends Component {
  createElements = () => {
    return hobbies.map((item) => {
      return (
        <div className="flex row" key={item.title}>
          <div className="hobbies-title subtitle">{item.title}</div>
          <div className="hobbies-description description">
            {item.description}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="hobbies-container">
        <p className="header">Hobbies</p>
        {this.createElements()}
      </div>
    );
  }
}
