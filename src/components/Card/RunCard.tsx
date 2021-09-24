import React from 'react';
import { VStack, Box } from 'native-base';
import ImageBackground from '../common/ImageBackground';
import BlueBadge from './BlueBadge';
import Title from './Title';
import SubTitle from './SubTitle';
import Participant from './Participant';
import Context from './Context';
import { LinearGradient } from 'expo-linear-gradient';

const dummyImage =
  'https://images.unsplash.com/flagged/photo-1570612861541-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=';

/*
RunCard 컴포넌트 디폴트값 
w : 100%,
h : 196px:
lenear-gradient 적용,

w, h string값으로 수정 가능

props로 전달해서 내용 넣을수 있는것
startDate -> 좌측상단에 파란색 남은 시간 안내
title -> 좌측하단 큰 글씨
subTitle -> 좌측하단 타이틀 밑에 글씨
context -> 우측 하단에 내용, (회복 러닝, ~~)
maximum, waiting -> 좌측하단 남은 인원


*/

const RunCard = ({
  startDate,
  title,
  subTitle,
  image = dummyImage,
  maximum,
  waiting,
  h = '196px',
  w = '100%',
  context,
}: any) => {
  return (
    <VStack mb="28px" w={w} h={h} bg="#999">
      <ImageBackground flex={1} justifyContent="space-between" source={{ uri: image }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.2)']}
          style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}
        >
          {startDate && <BlueBadge>{startDate}</BlueBadge>}
          <Box position="absolute" bottom="15px" left="12px" overflow="visible">
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </Box>
          {context ? (
            <Context context={context} />
          ) : (
            maximum && waiting && <Participant maximum={maximum} waiting={waiting} />
          )}
        </LinearGradient>
      </ImageBackground>
    </VStack>
  );
};
export default RunCard;
