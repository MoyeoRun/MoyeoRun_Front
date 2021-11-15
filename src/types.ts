//user
type User = {
  id: number;
  name: string;
  email: string;
  weight: number | null;
  height: number | null;
  image: string | null;
};
const user: User = {
  id: 1,
  name: '황인서',
  email: 'test@gmail.com',
  weight: 50,
  height: 190,
  image: '',
};

type Token = { token: string; expiresIn: Date };

//room
type Room = {
  id: number; //방 아이디
  title: string; //방 제목
  isOpen: boolean; //현재 방이 열려있는지 여부
  description: string | null; // 방 설명
  limitMember: number; //인원 제한
  userAmount: number; //참가 인원 수
  multiRoomMember: Array<Partial<User>>; //참가 유저 리스트
  startDate: string; //모여런 시작 일시 ISOString
  targetDistance: number; //모여런 목표 거리 Km단위
  targetTime: number; //모여런 목표 시간 밀리세컨드 단위
  roomImage: string | null; //모여런 이미지
};
const room: Room = {
  id: 1,
  title: '바람 부는 날 5Km 함께 뛰어요',
  isOpen: true,
  description: 'ㅎㅇ',
  limitMember: 4,
  userAmount: 3,
  multiRoomMember: [
    { id: 1, name: '황인서', image: '' },
    { id: 2, name: '김건훈', image: '' },
    { id: 3, name: '조인혁', image: '' },
  ],
  startDate: '2021-11-14T12:31:04.672Z',
  targetDistance: 3,
  targetTime: 30,
  roomImage: '',
};

type RoomList = {
  participantRoom: Room | null; //현재 참여중인 모여런
  roomList: Array<Partial<Room>>; //전체 모여런 리스트
};

type RoomStatus = {
  connectedUserId: Array<User['id']>; //현재 대기중인 유저 목록
};
const roomStatus: RoomStatus = {
  connectedUserId: [1, 2, 3],
};

//moyeoRun
type Point = {
  latitude: number; //현재 위치의 위도
  longitude: number; //현재 위치의 경도
  currentAltitude: number; //현재 위치의 고도
  currentTime: number; //누적 시간
  currentDistance: number; //누적 거리
  currentPace: number; //순간 페이스
};

type RunData = Array<Point>;
const runData: RunData = [
  {
    latitude: 37.659187827620975,
    longitude: 127.0514252126567,
    currentAltitude: 30,
    currentTime: 1234567,
    currentDistance: 3.23,
    currentPace: 6.12,
  },
];

type RunStatus = {
  time: number; //러닝 시간
  distance: number; //총 러닝 거리
  pace: number; //평균 러닝 페이스
};
const runStatus: RunStatus = { time: 0, distance: 0, pace: 0 };

type OthersRunData = Array<{ userId: User['id'] } & { runData: RunData }>;
const othersRunDataP: OthersRunData = [
  {
    userId: 1,
    runData: [
      {
        latitude: 37.659187827620975,
        longitude: 127.0514252126567,
        currentAltitude: 30,
        currentTime: 1234567,
        currentDistance: 3.23,
        currentPace: 6.12,
      },
    ],
  },
  {
    userId: 2,
    runData: [
      {
        latitude: 37.659181827620975,
        longitude: 127.0514242126567,
        currentAltitude: 28,
        currentTime: 1234657,
        currentDistance: 3.12,
        currentPace: 6.01,
      },
    ],
  },
];

type RunRecord = {
  id: string;
  type: 'free' | 'time' | 'distance' | 'multi';
  user: Partial<User>;
  title?: string;
  targetDistance?: number | null;
  targetTime?: number | null;
  runPace: number;
  runTime: number;
  runDistance: number;
  createdAt: string;
  runData: RunData | Array<RunData>;
};

const singleRunRecord: RunRecord = {
  id: '123123',
  type: 'free',
  user: { email: 'dnatuna123@kakao.com', id: 1 },
  runPace: 6.231213545312,
  runTime: 232154,
  runDistance: 111.213548,
  createdAt: '2021-11-07T00:29:25.272Z',
  runData: [
    [
      {
        latitude: 37.52818511648284,
        longitude: 127.07127183483387,
        currentDistance: 0,
        currentPace: 0,
        currentTime: 0,
        currentAltitude: 0,
      },
    ],
    [
      {
        latitude: 37.52818511648284,
        longitude: 127.07127183483387,
        currentDistance: 0,
        currentPace: 0,
        currentTime: 0,
        currentAltitude: 0,
      },
    ],
  ],
};

const multiRunRecord: RunRecord = {
  id: '123124',
  type: 'multi',
  user: { email: 'dnatuna123@kakao.com', id: 1 },
  runPace: 6.231213545312,
  runTime: 232154,
  runDistance: 111.213548,
  createdAt: '2021-11-08T00:29:25.272Z',
  runData: [
    {
      latitude: 37.52818511648284,
      longitude: 127.07127183483387,
      currentDistance: 0,
      currentPace: 0,
      currentTime: 0,
      currentAltitude: 0,
    },
    {
      latitude: 37.52818511648284,
      longitude: 127.07127183483387,
      currentDistance: 0,
      currentPace: 0,
      currentTime: 0,
      currentAltitude: 0,
    },
  ],
};

type RunStatistics = Array<{
  count: number;
  date: string;
  totalDistanceOfTerm: number;
  totalTimeOfTerm: number;
  averagePaceOfTerm: number;
}>;

type RecordList = {
  totalTime: number;
  totalDistance: number;
  totalAveragePace: number;
  analysisRunningListBetweenTerm: RunStatistics;
  runningList: Array<RunRecord>;
};

const recordList: RecordList = {
  totalTime: 928616,
  totalDistance: 444.854192,
  totalAveragePace: 6.231213545312,
  analysisRunningListBetweenTerm: [
    {
      count: 4,
      date: '2021-11-07T00:29:25.272Z',
      totalDistanceOfTerm: 444.854192,
      totalTimeOfTerm: 928616,
      averagePaceOfTerm: 6.231213545312,
    },
  ],
  runningList: [
    {
      id: '61871de5cf0809036280610c',
      user: {
        email: 'dnatuna123@kakao.com',
        id: 1,
      },
      type: 'free',
      runPace: 6.231213545312,
      runTime: 232154,
      runDistance: 111.213548,
      createdAt: '2021-11-07T00:29:25.272Z',
      runData: [
        [
          {
            latitude: 37.52818511648284,
            longitude: 127.07127183483387,
            currentDistance: 0,
            currentPace: 0,
            currentTime: 0,
            currentAltitude: 0,
          },
        ],
      ],
    },
  ],
};
