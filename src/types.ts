//user
type User = { id: number; name: string; image: string };
// const user: User = { id: 1, name: '황인서', image: '' };

//room
type Room = {
  id: number; //방 아이디
  title: string; //방 제목
  description: string | null; // 방 설명
  limitMember: number; //인원 제한
  userAmount: number; //참가 인원 수
  multiRoomMember: Array<User>; //참가 유저 리스트
  startDate: string; //모여런 시작 일시 ISOString
  targetDistance: number; //모여런 목표 거리 Km단위
  targetTime: number; //모여런 목표 시간 밀리세컨드 단위
  roomImage: string | null; //모여런 이미지
};
// const room: Room = {
//   id: 1,
//   title: '바람 부는 날 5Km 함께 뛰어요',
//   description: 'ㅎㅇ',
//   limitMember: 4,
//   userAmount: 3,
//   multiRoomMember:[
//     { id: 1, name: '황인서', image: '' },
//     { id: 2, name: '김건훈', image: '' },
//     { id: 3, name: '조인혁', image: '' },
//   ],
//   startDate: '2021-11-14T12:31:04.672Z',
//   targetDistance: 3,
//   targetTime: 30,
//   roomImage: '',
// };

type RoomList = { participantRoom: Room | null; roomList: Array<Room> };

type RoomStatus = {
  connectedUser: Array<User>; //현재 대기중인 유저 목록
  isStarted: boolean; //모여런이 시작했는지 여부
};
// const roomStatus = {
//   connectedUser: [
//     { id: 1, name: '황인서', image: '' },
//     { id: 2, name: '김건훈', image: '' },
//     { id: 3, name: '조인혁', image: '' },
//   ],
//   isStarted: false,
// };

//moyeoRun
type RunData = Array<{
  latitude: number; //현재 위치의 위도
  longitude: number; //현재 위치의 경도
  currentAltitude: number; //현재 위치의 고도
  currentTime: number; //누적 시간
  currentDistance: number; //누적 거리
  currentPace: number; //순간 페이스
}>;
// const runData: RunData = [
//   {
//     latitude: 37.659187827620975,
//     longitude: 127.0514252126567,
//     currentAltitude: 30,
//     currentTime: 1234567,
//     currentDistance: 3.23,
//     currentPace: 6.12,
//   },
// ];

type OthersRunData = Array<{ user: User; runData: RunData }>;
// const othersRunData = [
//   {
//     user: { id: 1, name: '황인서', image: '' },
//     runData: [
//       {
//         latitude: 37.659187827620975,
//         longitude: 127.0514252126567,
//         currentAltitude: 30,
//         currentTime: 1234567,
//         currentDistance: 3.23,
//         currentPace: 6.12,
//       },
//     ],
//   },
//   {
//     user: { id: 2, name: '김건훈', image: '' },
//     runData: [
//       {
//         latitude: 37.659181827620975,
//         longitude: 127.0514242126567,
//         currentAltitude: 28,
//         currentTime: 1234657,
//         currentDistance: 3.12,
//         currentPace: 6.01,
//       },
//     ],
//   },
// ];

type UserRunData = { userId: User['id'] } & { runData: RunData };
// const userRunData = {
//   userId: 1,
//   runData: [
//     {
//       latitude: 37.659187827620975,
//       longitude: 127.0514252126567,
//       currentAltitude: 30,
//       currentTime: 1234567,
//       currentDistance: 3.23,
//       currentPace: 6.12,
//     },
//   ],
// };
