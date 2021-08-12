import * as React from 'react';
import ReactMapGL from 'react-map-gl';
export default function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 28.5355,
    longitude: 77.3910,
    zoom: 12,
    width :"100vw",
    height :"100vh"
  });
  React.useEffect (()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setViewport((prevState) =>  ( {...prevState , latitude :  position.coords.latitude, longitude :position.coords.longitude}))
    });
  } , [])
  return (
    <>
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/kanishak/cks4f0hgq370s18qqlv5z4llj"
      mapboxApiAccessToken="pk.eyJ1Ijoia2FuaXNoYWsiLCJhIjoiY2tzNGh4bDM2MWR0djJvcGVuYjh1bXl3eSJ9.m3b-ZMlHv2xdsi68llsQXg"
 
      onViewportChange={(viewport) => setViewport(viewport)}>
        </ReactMapGL>
    </>
  );
}
    