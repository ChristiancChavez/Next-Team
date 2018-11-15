import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMoment from 'input-moment';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react';
import moment from 'moment';
import './Schedule.scss';
// import { isAbsolute } from 'path';


class Schedule extends Component {
  state = {
    m: moment(),
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  handleChange = m => {
    this.setState({ m });
  };

  handleSave = () => {
    const { m } = this.state;
    console.log('saved', m.format('llll'));
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = () => {
    const { showingInfoWindow } = this.state;

    if (showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: '55%',
      height: '60%',
      left: '24%',
      top: '110%',
      marginBottom: '5%',
      borderRadius: '6px',
      border: 'solid 1px #D1AC17',
    };

    const { google } = this.props;

    const {
      activeMarker,
      showingInfoWindow,
      selectedPlace,
      m
    } = this.state;

    const { name } = selectedPlace;

    return (
      <span className="picker">
        <span className="picker__place">
          <input className="input" type="text" value="Brasileirao - Barranquilla, Colombia" readOnly />
        </span>
        <span className="picker__schedule">
          <input className="input" type="text" value={m.format('llll')} readOnly />
          <InputMoment
            moment={m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
            hourStep={1}
            prevMonthIcon="ion-ios-arrow-left"
            nextMonthIcon="ion-ios-arrow-right"
          />
        </span>
        <Map
          google={google}
          onClick={this.onMapClicked}
          style={style}
          zoom={14}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="Current location"
          />
          <InfoWindow
            onClose={this.onInfoWindowClose}
            marker={activeMarker}
            visible={showingInfoWindow}
          >
            <div>
              <h1>
                {name}
              </h1>
            </div>
          </InfoWindow>
        </Map>
      </span>
    );
  }
}

Schedule.propTypes = {
  google: PropTypes.shape().isRequired
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD25bf9Rz-jJCV5cQm1-6wvywU1Q4eNt3Y')
})(Schedule);
