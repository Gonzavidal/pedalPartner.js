import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = { lat: -33.742145, lng: -70.735680 };

const position = { lat: -33.74200819688481, lng: -70.73546492713628 }


function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "key=AIzaSyBACfURyt2puQfsUqji6npYqMzPKoeRdIQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);

    /*map.fitBounds(bounds);*/

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18} // 
      onUnmount={onUnmount}
    >
      <Marker
        onLoad={onLoad}
        position={position}
      />

    </GoogleMap>
  ) : <></>
}

export default React.memo(Maps)