import React, { useEffect } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import useInterval from '../../lib/util/useInterval';
import * as Location from 'expo-location';
import { VStack } from 'native-base';

type SingleRunProps = {};

const SingleRun = ({}: SingleRunProps) => {
  const [points, setPoints] = React.useState<
    Array<{ latitude: number; longitude: number; accuracy: number | null }>
  >([]);

  const getLocation = async () => {
    try {
      const {
        coords: { latitude, longitude, accuracy },
      } = await Location.getCurrentPositionAsync();
      setPoints(points.concat({ latitude, longitude, accuracy }));
      console.log({ latitude, longitude, accuracy });
    } catch (e) {
      console.log('위치정보를 가져올 수 없습니다.');
    }
  };

  useInterval(getLocation, 1000);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation={true}>
        <Polyline
          coordinates={points}
          strokeWidth={10}
          strokeColor="#3035F0"
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
          ]}
          lineCap="round"
          lineJoin="bevel"
        />
      </MapView>
    </View>
  );
};

export default SingleRun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
