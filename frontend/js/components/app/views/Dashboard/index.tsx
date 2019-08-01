import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { Map, TileLayer, Marker, MapLayer, Popup, withLeaflet } from 'react-leaflet';
import Search from './search';
const axios = require('axios');
import config from '../../../../serverConfig';
import * as L from "leaflet";
require("leaflet.markercluster");

require('react-leaflet-markercluster/dist/styles.min.css');
// import MarkerClusterGroup from 'react-leaflet-markercluster';

type State = {
  lat: number,
  long: number,
  zoom: number,
}
// Component styles
const styles = theme => ({
  container: {
    height: '100%',
    width: '100%',

    '& .leaflet-container': {
      height: '100% !important',
      width: '100% !important',
      margin: '0 auto',
      position: 'absolute !important'
    },
  },
});

class Dashboard extends React.Component<any, any> {
  state = {
    lat: this.props.lat || 47.639184,
    long: this.props.long || -122.371329,
    zoom: 13,
    maxZoom: 14,
    minZoom: 4,
    locations: [],
  }

  componentDidMount() {
    if (this.mapRef && this.mapRef.current) {
      this.mapRef.current.leafletElement.on('geosearch/showlocation', (e) => {
        this.getNearByLocation(parseFloat(e.location.y), parseFloat(e.location.x));
      });
    }

    this.getLastLocation();
  }

  getNearByLocation = async (lat, long) => {
    let response = {};
    try {
      response = await axios.get(`${config.api}/dashboard/getnearbylocations?lat=${lat}&long=${long}`, {
        withCredentials: true,
      });
    }
    catch (err) {}

    if (response && response.data) {
      this.setState({ locations: response.data });
    }
  } 

  getLastLocation = async () => {
    let response = {};
    
    try {
      response = await axios.get(config.api + '/dashboard/getlastlocation', {
        withCredentials: true,
      });
    }
    catch (err) { }

    if (response && response.data && response.data[0]) {
      const lat = response.data[0].lat;
      const long = response.data[0].long;
      this.setState({ lat, long });
      this.getNearByLocation(lat, long);
    }
  }

  mapRef = React.createRef<Map>()

  render() {
    const { classes } = this.props;
    const position = [this.state.lat, this.state.long];
    const SearchBar = withLeaflet(Search);  {/*  this part is needed */}
    
    return (
      <div className={classes.container}>
        <Map center={position} zoom={this.state.zoom} minZoom={2} maxZoom={14} style={{ height: "100vh" }} 
          ref={this.mapRef}>
          <SearchBar/>        
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.locations.length && <MarkerClusterGroupEl>
            {this.state.locations.map(m => {
              return <Marker position={[m.lat, m.long]} >
                {m.address && <Popup>{m.address}</Popup>}
              </Marker>
            })};
          </MarkerClusterGroupEl>
          }
        </Map>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Dashboard));

class MarkerClusterGroup extends MapLayer {

  createLeafletElement(props) {
    const el = new L.markerClusterGroup(props);
    this.contextValue = {
      ...props.leaflet,
      layerContainer: el
    };
    return el;
  }

}

const MarkerClusterGroupEl = withLeaflet(MarkerClusterGroup);