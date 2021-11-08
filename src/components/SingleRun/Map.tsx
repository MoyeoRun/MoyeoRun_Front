import { Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

type MapProps = {
  section: number;
  runData: Array<
    Array<{
      latitude: number;
      longitude: number;
      currentTime: number;
      currentDistance: number;
      currentPace: number;
    }>
  >;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 315;

const Map = ({ section, runData }: MapProps) => {
  const [dash, setDash] = useState<any>([0]);
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (mapRef) {
      if (runData[section].length > 1) setDash(null);
      if (runData[section].length !== 0) {
        const currentPoint = runData[section][runData[section].length - 1];
        mapRef.current?.animateCamera({
          center: { latitude: currentPoint.latitude, longitude: currentPoint.longitude },
          pitch: 2,
          heading: 20,
          altitude: 500,
          zoom: 18,
        });
      }
    }
  }, [runData]);

  return (
    <Box display="flex" width={width} height={height} flex={1} bg="#000000">
      <MapView
        ref={mapRef}
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
      >
        {runData.map((runSection) => (
          <Polyline
            lineDashPattern={runSection.length === 0 ? [0] : null}
            coordinates={runSection}
            strokeWidth={10}
            strokeColor="#3035F0"
          />
        ))}
      </MapView>
    </Box>
  );
};

export default Map;
