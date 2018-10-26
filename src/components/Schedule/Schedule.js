import React, { Component } from 'react';
import InputMoment from 'input-moment';
import './Schedule.scss';
import moment from 'moment';

class Schedule extends Component {
  state = {
    m: moment()
  };

  handleChange = m => {
    this.setState({ m });
  };

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'));
  };

  render() {
    return (
    <span className="picker">
        <span className="picker__schedule">
            <input className="input" type="text" value={this.state.m.format('llll')} readOnly />
            <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
            hourStep={1} 
            prevMonthIcon="ion-ios-arrow-left" 
            nextMonthIcon="ion-ios-arrow-right"
            />
        </span>
        <span>
            ffggdgdhdhdhhdhdhhghfhfdhdhdfhjdjdfhjdjfj
        </span>
    </span>
    );
  }
}
export default Schedule;