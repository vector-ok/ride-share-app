// import { useEffect } from 'react';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      //   style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3',
      center: [6.734098, 3.251857],
      zoom: 3.5,
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([6.876078, 8.756457])
      .addTo(map);
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
