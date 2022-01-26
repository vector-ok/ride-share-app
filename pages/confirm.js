import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import RideSelector from './components/RideSelector';

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
  const mapbox_access_token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const getPickupCoordinates = (pickup) => {
    // const pickup = 'Ibadan';
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

  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = 'Lagos';
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
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Button</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButtonContainer = tw.div`border-t-2`;
const ConfirmButton = tw.div`bg-black text-white my-4 mx-2 py-4 text-center text-xl`;

const Wrapper = tw.div`flex flex-col h-screen`;
const RideContainer = tw.div`flex-1 flex flex-col h-1/2`;
