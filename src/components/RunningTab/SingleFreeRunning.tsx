import { Box } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';
import { RunCard } from '../Card';

const SingleFreeRunningCard = (props: any) => {
  const freeRunData = {
    title: '자유 달리기',
    subTitle: '거리, 시간, 스피드를 기준으로 자유롭게 달립니다',
    image:
      'https://images.unsplash.com/photo-1486218119243-13883505764c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2944&q=80',
  };

  return (
    <>
      <Pressable
        onPress={() => {
          console.log('자유 달리기 페이지로 이동');
        }}
      >
        <RunCard
          height={196}
          title={freeRunData.title}
          subTitle={freeRunData.subTitle}
          image={freeRunData.image}
          noBadge={true}
          noParticipant={true}
        />
      </Pressable>
    </>
  );
};
export default SingleFreeRunningCard;
