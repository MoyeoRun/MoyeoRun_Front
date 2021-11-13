import { Box, Button, Input } from 'native-base';
import React, { useRef } from 'react';
import CustomWebview from '../common/CustomWebview';

const RecordTab = () => {
  const webviewRef = useRef<any>();

  return (
    <Box flex={1}>
      <CustomWebview parentRef={webviewRef} path="recordDetail" />
    </Box>
  );
};

export default RecordTab;

const recordData = {
  date: 'Wed Nov 10 2021 18:50:09 GMT+0900 (한국 표준시)',
  title: '바람부는 날 5Km 함께 뛰어요',
  distance: 5,
  pace: 5.36,
  time: 1700,
  runData: [
    {
      latitude: 37.659187827620975,
      longitude: 127.0514252126567,
    },
    {
      latitude: 37.65703042721502,
      longitude: 127.05266975756653,
    },
    {
      latitude: 37.653191118834805,
      longitude: 127.0534422337102,
    },
    {
      latitude: 37.65312316468623,
      longitude: 127.0548155246323,
    },
    {
      latitude: 37.65599417327399,
      longitude: 127.05449365957243,
    },
    {
      latitude: 37.66012211532027,
      longitude: 127.052326434836,
    },
    {
      latitude: 37.66441968764726,
      longitude: 127.05174707772825,
    },
    {
      latitude: 37.66779131629595,
      longitude: 127.0497408063072,
    },
    {
      latitude: 37.66776583850865,
      longitude: 127.04826022703183,
    },
    {
      latitude: 37.666118256361884,
      longitude: 127.04911853385815,
    },
    {
      latitude: 37.66453008843758,
      longitude: 127.05060984196885,
    },
    {
      latitude: 37.66149803713027,
      longitude: 127.05093170702871,
    },
    {
      latitude: 37.659553042638635,
      longitude: 127.05138231811692,
    },
    {
      latitude: 37.6556629007224,
      longitude: 127.05346371235336,
    },
  ],
  runSummaryData: [
    {
      pace: 5,
      altitude: -2,
    },
    {
      pace: 5.3,
      altitude: -3,
    },
    {
      pace: 5.22,
      altitude: -4,
    },
    {
      pace: 5.1,
      altitude: -1,
    },
  ],
};
