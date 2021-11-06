import React, { useRef } from 'react';
import { Box, ScrollView } from 'native-base';
import { useWindowDimensions, Animated } from 'react-native';
import SingleRunPaceContainer from '../../containers/SingleRunPaceContainer';
import SingleRunMapContainer from '../../containers/SingleRunMapContainer';

const SingleRunning = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const ScreenBox = ({ children, ...props }: any) => {
    return (
      <Box w={windowWidth} h={windowHeight} {...props}>
        {children}
      </Box>
    );
  };

  const scrollX = useRef(new Animated.Value(1)).current;
  const arr = [0, 1];

  return (
    <ScreenBox>
      <ScrollView
        horizontal={true}
        bounces={false}
        pagingEnabled
        contentOffset={{ x: windowWidth, y: 0 }}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={12}
      >
        <ScreenBox>
          <SingleRunPaceContainer />
        </ScreenBox>
        <ScreenBox>
          <SingleRunMapContainer />
        </ScreenBox>
      </ScrollView>
    </ScreenBox>
  );
};

export default SingleRunning;
