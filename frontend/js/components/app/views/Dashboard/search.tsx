import { MapControl } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class Search extends MapControl {
    createLeafletElement() {
        return GeoSearchControl({
            provider: new OpenStreetMapProvider(),
            style: 'bar',
            showMarker: false,
            showPopup: false,
            autoClose: true,
            retainZoomLevel: false,
            animateZoom: true,
            keepResult: false,
            searchLabel: 'search',
        });
    }
}

export default Search;