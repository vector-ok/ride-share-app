import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
  const mapbox_access_token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const getPickupCoordinates = () => {
    const pickup = 'Ibadan';
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token: mapbox_access_token,
          limit: 1,
        })
    ).then((response) =>
      response.json().then((data) => {
        console.log('pickup is ', data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      })
    );
  };

  const getDropoffCoordinates = () => {
    const dropoff = 'Lagos';
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token: mapbox_access_token,
          limit: 1,
        })
    ).then((response) =>
      response.json().then((data) => {
        console.log('dropoff is ', data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      })
    );
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        Ride Selector Confirm Button
        {/* {pickupCoordinates}
        {dropoffCoordinates} */}
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`flex flex-col h-screen`;
const RideContainer = tw.div`flex-1`;
