import React, { useState } from 'react';
import { Box, HStack, ITextProps, Modal } from 'native-base';
import { Pressable } from 'react-native';
import { CalendarIcon } from '../../assets/svg';
import { Calendar } from 'react-native-calendars';
import CustomCalendar, { markedDatesType } from './CustomCalendar';

type FilteringProps = {
  filterDates: markedDatesType;
};

const FilteringButton = ({ onPress }: { onPress: any }) => {
  const [year, month, date] = [2021, 8, [8, 14]];
  return (
    <Box mt="11px">
      <Pressable onPress={onPress}>
        <HStack display="flex" flex-direction="row" alignItems="flex-start">
          <CalendarIcon />
          <Box
            _text={{
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 24,
            }}
            ml="10px"
          >
            {`${year}년 ${month}월 ${date[0]} - ${date[1]}일`}
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );
};

const Filtering = ({ filterDates }: FilteringProps) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <>
      <FilteringButton onPress={setIsOpen} />
      {/*날짜 필터링을 위한 달력 뜨는 모달창 */}
      <Modal
        isOpen={isOpen}
        flex={1}
        justifyContent="center"
        alignItems="center"
        bg="rgba(0, 0, 0, 0.4)"
        onClose={() => setIsOpen(false)}
      >
        <Modal.Content w="100%" m="24px" mb="0px" p="24px" bg="#ffffff" borderRadius="12">
          <Box>
            <CustomCalendar filterDates={filterDates} />
          </Box>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Filtering;
