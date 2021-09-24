import { Box, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { RunCard } from '../Card';

const runningGuideData = [
  {
    title: '5분 달리기',
    context: '회복 러닝',
    image:
      'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZXRjaGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: '처음부터 무리말고',
    context: '걷고 뛰는 러닝',
    image:
      'https://images.unsplash.com/photo-1603455778956-d71832eafa4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJ1bm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: '장거리 도전',
    context: '40분 러닝',
    image:
      'https://media.istockphoto.com/photos/african-woman-running-on-racetrack-picture-id489304976?b=1&k=20&m=489304976&s=170667a&w=0&h=GGtU-aC6uEVg7djn1-9dKxyBjjVYYxtX_UQGJKG0GY8=',
  },
  {
    title: '인터벌 훈련',
    context: '인터벌 러닝',
    image:
      'https://images.unsplash.com/photo-1474546652694-a33dd8161d66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHJ1bm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
];

const SoloRunningGuide = (props: any) => {
  return (
    <>
      <Box mt="6px">
        <VStack>
          <Text fontFamily="text" fontSize="22px" fontWeight="600" lineHeight="26.4px" letterSpacing="-1.5">
            러닝 가이드
          </Text>
          <Box>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} mt="18px">
              {runningGuideData.map((data) => {
                let { title, context, image } = data;
                return (
                  <>
                    <RunCard w="292px" title={title} context={context} image={image} />
                    <Box mr="11px" />
                  </>
                );
              })}
            </ScrollView>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default SoloRunningGuide;
// const RunCardTest = () => {
//     return <RunCard />;
// };

// export default RunCardTest;
