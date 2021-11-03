import { Box } from 'native-base';
import React from 'react';
import { Dimensions, StyleProp, View, ViewStyle } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 315;

const StyleMap: StyleProp<ViewStyle> = {
  width: '100%',
  height: '100%',
  position: 'absolute',
};

const Map = (props: any) => {
  return (
    <Box display="flex" width={width} height={height} flex={1} bg="#000000" {...props}>
      <MapView
        style={StyleMap}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
      />
    </Box>
  );
};

export default Map;
