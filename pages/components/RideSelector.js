import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../../data/carList';

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
  const [rideDuration, setRideDuration] = useState(0);
  const mapbox_access_token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=${mapbox_access_token}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0]?.duration);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose your ride, or swipe up for more...</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>10min away</Time>
            </CarDetails>
            <Price>{'NGN' + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}

export default RideSelector;

const Wrapper = tw.div`flex flex-col flex-1 overflow-y-scroll`;
const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b`;
const CarList = tw.div`overflow-y-scroll`;
const Car = tw.div`flex px-4 py-4 items-center`;
const CarImage = tw.img`h-14 mr-2`;
const CarDetails = tw.div`flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div`text-sm`;
