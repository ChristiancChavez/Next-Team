import React, { Component } from 'react';
import InputMoment from 'input-moment';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import moment from 'moment';
import './Schedule.scss';

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
    console.log('saved', this.state.m.format('llll'));
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const style = {
      width: '55%',
      height: '60%',
      left: "24%",
      top: "110%",
      marginBottom: "5%",
      borderRadius: "6px",
      border: "solid 1px #D1AC17",
    }

    return (
      <span className="picker">
        <span className="picker__place"><input className="input" type="text" value="Brasileirao - Barranquilla, Colombia" readOnly /></span>
        <Map google={this.props.google}
          onClick={this.onMapClicked} 
          style={style}
          zoom={14}>
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose} 
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
          </InfoWindow>
        </Map>
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
      </span>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD25bf9Rz-jJCV5cQm1-6wvywU1Q4eNt3Y")
})(Schedule)