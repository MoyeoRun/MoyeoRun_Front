import React from 'react';
import { Box, HStack, ITextProps } from 'native-base';
import { Pressable } from 'react-native';
import { CalendarIcon } from '../../assets/svg';

type FilteringProps = {
  onPress: any;
};

const FilteringButton = ({ onPress }: { onPress: any }) => {
  const [year, month, date] = [2021, 8, [8, 14]];
  return (
    <Box mt="11px">
      <Pressable onPress={onPress}>
        <HStack display="flex" flex-direction="row" alignItems="flex-start">
          <CalendarIcon />
          <Box _text={FilteringTextStyle} ml="10px">
            {`${year}년 ${month}월 ${date[0]} - ${date[1]}일`}
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );
};

const Filtering = ({ onPress }: FilteringProps) => {
  return (
    <>
      <FilteringButton onPress={onPress} />
      {/*날짜 필터링을 위한 달력 뜨는 모달창 */}
      {/* <Modal> </Modal> */}
    </>
  );
};

export default Filtering;

const FilteringTextStyle: ITextProps = {
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 24,
};
