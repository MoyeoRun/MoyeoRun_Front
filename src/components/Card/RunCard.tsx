import React from 'react';
import { VStack } from 'native-base';
import ImageBackground from '../common/ImageBackground';
import BlueBadge from './BlueBadge';
import Title from './Title';
// import SubTypo from './SubTypo';
import Participant from './Participant';

const dummyImage =
  'https://images.unsplash.com/flagged/photo-1570612861541-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=';

const RunCard = ({ data }: any) => {
  const { startdate, title, subTypo, image = dummyImage, maximum, waiting, bluebadge = '' } = data;
  return (
    <VStack mb="28px" h="196px" bg="#999">
      <ImageBackground flex={1} justifyContent="space-between" px="10px" py="15px" source={{ uri: image }}>
        <BlueBadge>{startdate}</BlueBadge>
        <Title>{title}</Title>
        <Participant maximum={maximum} waiting={waiting} />
      </ImageBackground>
    </VStack>
  );
};
export default RunCard;
