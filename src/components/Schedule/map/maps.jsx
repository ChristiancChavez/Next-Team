import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

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
    } = this.state;

    const { name } = selectedPlace;
    return (
      <Map
        initialCenter={{
          lat: 4.0000000,
          lng: -72.0000000
        }}
        google={google}
        zoom={6}
        style={style}
        onClick={this.onMapClicked}
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
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.shape().isRequired,
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD25bf9Rz-jJCV5cQm1-6wvywU1Q4eNt3Y')
})(MapContainer);
