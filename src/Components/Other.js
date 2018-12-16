import React, { Component } from 'react'
import { other } from '../Info'

export class Other extends Component {
    createElements = () => {
        return other.map((item) => {
            return (
                <div className="row" key={item.title}>
                    <p className="other-title title">{item.title}</p>
                    <p className="other-description description">{item.description}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="other-container">
                {this.createElements()}
            </div>
        );
    }
}