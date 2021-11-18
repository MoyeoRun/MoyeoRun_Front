import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MissionTab from '../../components/bottomTab/MissionTab';

const MissionTabContainer = () => {
  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <MissionTab />
    </SafeAreaView>
  );
};

export default MissionTabContainer;
