import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FriendTab from '../../components/bottomTab/FriendTab';

const FriendTabContainer = () => {
  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <FriendTab />
    </SafeAreaView>
  );
};

export default FriendTabContainer;
