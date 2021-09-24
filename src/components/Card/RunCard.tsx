import React from 'react';
import { VStack } from 'native-base';
import ImageBackground from '../common/ImageBackground';
import BlueBadge from './BlueBadge';
import Title from './Title';
import SubTitle from './SubTitle';
import Participant from './Participant';
import { LinearGradient } from 'expo-linear-gradient';

const dummyImage =
  'https://images.unsplash.com/flagged/photo-1570612861541-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=';

const RunCard = ({ startdate, title, subTitle, image = dummyImage, maximum, waiting }: any) => {
  return (
    <VStack mb="28px" h="196px" bg="#999">
      <ImageBackground flex={1} justifyContent="space-between" source={{ uri: image }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.2)']}
          style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}
        >
          <BlueBadge>{startdate}</BlueBadge>

          <Title>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
          <Participant maximum={maximum} waiting={waiting} />
        </LinearGradient>
      </ImageBackground>
    </VStack>
  );
};
export default RunCard;
