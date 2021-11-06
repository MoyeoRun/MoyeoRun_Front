import { Box, HStack, VStack, Image } from 'native-base';
import React from 'react';
import ImageBackground from '../common/ImageBackground';
import { RecordType } from './Summary';

export type detailRecordCard = {
  imageUri: string;
  recordData: RecordType;
  date: string;
  title: string;
};

const ThumbNailImage = ({ imageUri }: { imageUri: string }) => {
  return (
    <Box width="90" height="90" bg="#F0F0F0" borderRadius="4px">
      <ImageBackground
        flex={1}
        source={{
          uri: imageUri,
        }}
      />
    </Box>
  );
};
const Date = ({ date }: { date: string }) => (
  <Box
    _text={{
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 16,
      color: '#AAAAAA',
      letterSpacing: -0.7,
    }}
  >
    {date}
  </Box>
);
const Title = ({ title }: { title: string }) => (
  <Box
    mt="4px"
    _text={{
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 19,
      letterSpacing: -0.5,
      color: '#333333',
    }}
  >
    {title}
  </Box>
);

const RecordItem = ({ value, keyword, ...props }: any) => {
  return (
    <HStack {...props}>
      <VStack mt="12px">
        <Box display="flex" justifyContent="center" alignItems="flex-start">
          <Box
            _text={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 19,
              letterSpacing: -1,
            }}
          >
            {value}
          </Box>
          <Box
            _text={{
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 15.6,
              color: '#AAAAAA',
            }}
          >
            {keyword}
          </Box>
        </Box>
      </VStack>
    </HStack>
  );
};

const DetailRecordCard = ({ imageUri, recordData, title, date }: detailRecordCard) => (
  <Box mt="12px" py="12px" px="12px" bg="#ffffff">
    <HStack>
      <ThumbNailImage imageUri={imageUri} />
      <VStack ml="11px">
        <Date date={date} />
        <Title title={title} />
        <HStack>
          <RecordItem value={recordData.distance} keyword="거리" />
          <RecordItem mx="auto" value={recordData.pace} keyword="평균 페이스" />
          <RecordItem value={recordData.time} keyword="시간" />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

export default DetailRecordCard;
