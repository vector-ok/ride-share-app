// import { useEffect } from 'react';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = (props) => {
  // console.log('props is ', props);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      //   style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3',
      center: [6.734098, 3.251857],
      zoom: 3.5,
    });
    // addToMap(map);

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 80,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    // console.log('coordinates is ', coordinates);
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
