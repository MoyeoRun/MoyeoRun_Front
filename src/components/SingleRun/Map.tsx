import { Box } from 'native-base';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

type MapProps = {
  points: Array<{ latitude: number; longitude: number; time: string }>;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 315;

const Map = ({ points }: MapProps) => {
  return (
    <Box display="flex" width={width} height={height} flex={1} bg="#000000">
      <MapView
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        initialRegion={{
          latitude: 37.53108,
          longitude: 127.06693,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={points.length % 4 === 0 && true}
        followsUserLocation={points.length % 4 === 0 && true}
      >
        <Polyline
          coordinates={points}
          strokeWidth={10}
          strokeColor="#3035F0"
          lineCap="round"
          lineJoin="bevel"
        />
      </MapView>
    </Box>
  );
};

export default Map;
