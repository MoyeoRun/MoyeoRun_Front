import React, { useRef } from 'react';
import { Box, ScrollView } from 'native-base';
import { useWindowDimensions, Animated } from 'react-native';
import SingleRunPaceContainer from '../../containers/singleRun/SingleRunPaceContainer';
import SingleRunMapContainer from '../../containers/singleRun/SingleRunMapContainer';

const SingleRunning = () => {
  const { width: windowWidth } = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(1)).current;

  return (
    <Box flex={1}>
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
        <Box flex={1} w={windowWidth}>
          <SingleRunPaceContainer />
        </Box>
        <Box flex={1} w={windowWidth}>
          <SingleRunMapContainer />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SingleRunning;
