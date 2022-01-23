import Link from 'next/link';
import React from 'react';
import tw from 'tailwind-styled-components';

const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://cdn.pixabay.com/photo/2021/12/13/23/19/redo-6869302_1280.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          {/* <Circle src="https://cdn.pixabay.com/photo/2013/07/12/18/16/hawser-153165_1280.png" /> */}
          <Line src="" />
          <Square src="" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://cdn.pixabay.com/photo/2021/07/25/08/07/add-6491203_1280.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://cdn.pixabay.com/photo/2013/07/13/11/42/star-158502_1280.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmLocations>
        <ConfirmButton>Confirm Locations</ConfirmButton>
      </ConfirmLocations>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`bg-gray-100`;
const ButtonContainer = tw.div` px-4`;
const BackButton = tw.img`bg-green-400 h-20 transform hover:scale-90 transition`;
const FromToIcons = tw.div``;
const InputContainer = tw.div`bg-white flex items-center`;
// const Circle = tw.img`h-5`;
const Line = tw.img``;
const Square = tw.img``;
const InputBoxes = tw.div`flex flex-col flex-1 mx-10`;
const Input = tw.input`h-10 bg-gray-200 m-2 rounded-2 outline-none border-none`;
const PlusIcon = tw.img`h-10 mr-10 transform hover:scale-90 transition`;
const SavedPlaces = tw.div`bg-white flex items-center p-5 my-10`;
const StarIcon = tw.img`h-5 mr-1`;
const ConfirmLocations = tw.div`flex flex-col flex-1 items-center bg-gray-500 py-5`;
const ConfirmButton = tw.button`bg-gray-800 text-white px-10 py-3 border rounded transform hover:scale-90 transition `;
