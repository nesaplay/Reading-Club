import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';


export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            center: {
                lat: parseFloat(nextProps.geo.lat), 
                lng: parseFloat(nextProps.geo.lng)
            }});
    }

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBLjYbol8vI9Kyvj3RrvaohtBM8_ndL_4k'}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                center={this.state.center}
            >

            </GoogleMapReact>


        )
    }
}

Map.defaultProps = {
    center: { lat: 44.30694, lng: 20.56 },
    zoom: 11
}
