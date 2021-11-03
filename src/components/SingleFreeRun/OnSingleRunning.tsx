import React, { useRef } from 'react';
import SingleRunWithPace from './WithPace';
import SingleRunWithMap from './WithMap';
import { Box, ScrollView } from 'native-base';
import { useWindowDimensions, Animated } from 'react-native';
import SingleRunPagination from './Pagination';

const OnSinglRunning = (props: any) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const ScreenBox = ({ children, ...props }: any) => {
    return (
      <Box w={windowWidth} h={windowHeight} {...props}>
        {children}
      </Box>
    );
  };

  const scrollX = useRef(new Animated.Value(0)).current;
  const arr = [0, 1];

  return (
    <ScreenBox borderWidth="1px">
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { x: scrollX },
            },
          },
        ])}
        scrollEventThrottle={12}
      >
        <ScreenBox>
          <SingleRunWithPace />
        </ScreenBox>
        <ScreenBox>
          <SingleRunWithMap />
        </ScreenBox>
      </ScrollView>
      <SingleRunPagination arr={arr} scrollW={windowWidth} scrollX={scrollX} />
    </ScreenBox>
  );
};

export default OnSinglRunning;
