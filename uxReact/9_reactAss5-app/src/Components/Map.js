import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class Mapslocation extends Component {
    render() {
        const style = {
            width: '100px',
            height: '100px'
        }
        return (
            <div className='container'>
                <Map
                    google={this.props.google}
                    zoom={10}
                    initialCenter={{
                        lat: 17.0016,
                        lng: -81.7891
                    }}
                    style={style}>
                    <Marker />
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('apikey'),
    version: 3.31
})(Mapslocation);