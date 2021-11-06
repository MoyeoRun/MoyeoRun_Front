import { Box } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
export type GraphProps = {
  graphData: {
    labels: Array<string>;
    datasets: [
      {
        data: Array<string>;
        colors: [(opacity: number) => string];
      },
    ];
  };
};

const Graph = ({ graphData }: GraphProps) => {
  return (
    <Box mt="37px">
      <Box borderTopWidth={1} borderColor="#DDDDDD" />
      <BarChart
        data={{
          // color: '#1162FF',
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              //색깔 설정을 각각 해줄수 ㅣㅇㅆ음
              colors: [
                (opacity = 1) => '#1162FF',
                (opacity = 1) => '#1162FF',
                (opacity = 1) => '#1162FF',
                (opacity = 1) => '#1162FF',
                (opacity = 1) => '#1162FF',
                (opacity = 1) => '#1162FF',
              ],
            },
          ],
        }}
        //차트 전체 width
        width={Dimensions.get('window').width - 40}
        //차트 전체 height
        height={200}
        //y축 몇칸으로 나누어줄지 분기 수
        segments={5}
        //y축 시작값을 0부터 할껀지
        fromZero={true}
        //막대기 위쪽에 border ture || false
        showBarTops={false}
        yAxisLabel={''}
        yAxisSuffix={''}
        //단색,커스텀 칼라로 막대기 칠해주려면 아래 두개 true
        flatColor={true}
        withCustomBarColorFromData={true}
        yLabelsOffset={30}
        chartConfig={{
          // 차트 배경 - 그라디언트 from to로 설정
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          // 차트 배경 - 그라디언트 from to로 설정
          //y축 소수점 자리수
          decimalPlaces: 0,
          //막대기 width 설정
          barPercentage: 0.3,
          //차트 점선, x,y성분 그려주는건데 그냥 두면 될듯.
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            borderWidth: 24,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </Box>
  );
};

export default Graph;
