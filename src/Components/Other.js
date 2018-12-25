import React, { Component } from 'react'
import { other } from '../Info'

export class Other extends Component {
    createElements = () => {
        return other.map((item) => {
            return (
                <div className="pair" key={item.title}>
                    <div className="other-title subtitle">{item.title}</div>
                    <div className="other-description description">{item.description}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="other-container">
                <p className="header">Other</p>
                {this.createElements()}
            </div>
        );
    }
}