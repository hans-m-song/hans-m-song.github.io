import React, {Component} from 'react';

export class Period extends Component {
  render() {
    return (
      <div className="period-container">
        <span className="period">
          {' '}
          {this.props.start} - {this.props.end}
          {' '}
        </span>
      </div>
    );
  }
}
