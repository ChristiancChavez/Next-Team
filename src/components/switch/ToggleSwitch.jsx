import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import '../../../node_modules/react-toggle-switch/dist/css/switch.min.css';
import './ToggleSwitch.scss';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => ({
      switched: !prevState.switched
    }));
  };

  render() {
    const { switched } = this.state;
    return (
      <div>
        <Switch onClick={this.toggleSwitch} on={switched} className="other-class" />
      </div>
    );
  }
}

export default ToggleSwitch;
