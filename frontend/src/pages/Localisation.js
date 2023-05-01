
import React, {Fragment} from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api'
// import Carousel from '../components/Carousel'

const containerStyle = {
    width:'100vw',
    height:'85vh'
}
const center = {
  lat:49.303629, 
  lng:2.014790
} 

const addresses = [
  {
    location: { lat: 49.179090, lng: 2.286970}, // Marie de Mesnil-en-Thelle
  },
  {
    location: { lat: 49.166680, lng: 2.245720}, // Eglise de Chambly
  },
  {
    location: {lat:49.303028, lng:2.014790}//
  }
];

const Localisation = () => {
 
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
   googleMapsApiKey:'AIzaSyB_IpizEcfAOF81JfsWQUwthEBr1wLurO8'
     //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  }) 

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map){
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUmount = React.useCallback(function callback(map){
    setMap(null)
  })

  return (
  <div style={{
    position: 'relative'
    }}>
      {/* <Carousel/> */}
    {/* <div style={{position:'absolute',top:10, backgroundColor:'orange', padding:25, zIndex:999 }}>
      <h1>Domaine de la butte</h1>
      <p style={{textAlign: 'center'}}>Au centre de la carte</p>
    </div> */}
    {isLoaded ?
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onUnmount={onUmount}
    >
      {/* {Child component, such as markers, info windows, etc} */}
      {addresses.map((address, index) => (
            <Marker
              key={index}
              position={address.location}
            />
          ))}
    </GoogleMap>
    : <></>
    }
    </div>
  )
}

export default Localisation