import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';
import { Theme } from 'react-native-calendars/src/types';

export type markedDatesType = {
  [key: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    color?: string;
    textColor?: string;
  };
};

//라이브러리 github 주소
//https://github.com/wix/react-native-calendars
const CustomCalendar = ({ filterDates }: { filterDates: markedDatesType }) => (
  <Calendar
    theme={theme}
    markingType={'period'}
    markedDates={filterDates}
    onDayPress={(day) => {
      console.log('selected day', day);
    }}
    monthFormat={'yyyy   M월'}
    disableMonthChange={true}
    hideDayNames={false}
    onPressArrowLeft={(substractMonth) => substractMonth()}
    onPressArrowRight={(addMonth) => addMonth()}
  />
);
export default CustomCalendar;

// 일월화수목금토 바꿔주려면
//react-native-calendars/src/dateutils.js ->
// let weekDaysNames = ['일', '월', '화', '수', '목' ,'금','토'];

const theme: Theme = {
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#00adf5',
  todayTextColor: '#00adf5',
  dayTextColor: '#666666',
  textDisabledColor: '#d9e1e8',
  arrowColor: 'black',
  monthTextColor: 'black',
  textDayFontWeight: '500',
  textMonthFontWeight: '600',
  textDayHeaderFontWeight: '600',
  textDayFontSize: 15,
  textMonthFontSize: 22,
  textDayHeaderFontSize: 18,
  'stylesheet.calendar.header': {
    dayTextAtIndex0: {
      color: 'black',
    },
    dayTextAtIndex1: {
      color: 'black',
    },
    dayTextAtIndex2: {
      color: 'black',
    },
    dayTextAtIndex3: {
      color: 'black',
    },
    dayTextAtIndex4: {
      color: 'black',
    },
    dayTextAtIndex5: {
      color: 'black',
    },
    dayTextAtIndex6: {
      color: 'black',
    },
  },
};
