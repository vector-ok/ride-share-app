// import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';
import { Container } from 'postcss';
import Map from './components/Map';
import Link from 'next/link';

export default function Home() {
  return (
    // <div className={styles.container}>
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          {/* <TaxiLogo src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" /> */}
          <LogoSection>
            <TaxiLogo
              src="
            https://cdn.pixabay.com/photo/2016/08/16/14/35/taxi-1598104_1280.png"
            />
            <LogoText>Share Ryde</LogoText>
          </LogoSection>
          <Profile>
            <Name> Victor Ok</Name>
            <UserImage src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
              Car
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://cdn.pixabay.com/photo/2017/08/13/12/06/motorcycle-2636984_1280.png" />
            Bike
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://cdn.pixabay.com/photo/2021/02/02/14/54/icon-5974270_1280.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Destination?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-gray-600 h-screen
`;
const ActionItems = tw.div`flex-1 p-5`;
const Header = tw.div`flex justify-between items-center`;
const LogoSection = tw.div`flex justify-start items-center`;
const TaxiLogo = tw.img`h-4 w-4 rounded-full border border-gray-400 p-1`;
const LogoText = tw.div`mx-1 w-200 text-xl text-white`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`w-20 text-sm text-white`;
const UserImage = tw.img`h-10 w-10 rounded-full border border-gray-200 p-px`;
const ActionButtons = tw.div`flex my-5`;
const ActionButton = tw.div`flex bg-gray-100 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-90 transition text-lg cursor-pointer`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`;
