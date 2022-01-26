import React from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';

function RideSelector() {
  return (
    <Wrapper>
      <Title>Choose your ride, or swipe up for more.</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>10min away</Time>
            </CarDetails>
            <Price>NGN 1500</Price>
          </Car>
        ))}
        {/* <Car>
          <CarImage src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
          <CarDetails>
            <Service>Share Ryde</Service>
            <Time>10min away</Time>
          </CarDetails>
          <Price>NGN 1500</Price>
        </Car> */}
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
