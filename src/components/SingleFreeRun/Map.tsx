import { Box } from 'native-base';
import React from 'react';
import { Dimensions, StyleProp, View, ViewStyle } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Circle, Marker } from 'react-native-maps';
import { MarkerIcon } from '../../assets/svg';

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
          latitude: 37.78,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={{ latitude: 37.78, longitude: -122.4324 }}>
          <View>
            <MarkerIcon></MarkerIcon>
          </View>
        </Marker>

        {/* <Polyline
          coordinates={[
            { latitude: 37.78825, longitude: -122.4324 },
            { latitude: 37.789, longitude: -122.44 },
            { latitude: 37.2, longitude: -122.5 },
            { latitude: 37.0, longitude: -122.9 },
          ]}
          strokeColor="#1162FF" // rfallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={8}
        /> */}
      </MapView>
    </Box>
  );
};

export default Map;
