//user
type User = {
  id: number;
  name: string; //유저 실명
  email: string; //유저 이메일
  token: string | null; //유저의 푸시알림 토큰
  nickName: string | null; //유저 닉네임
  weight: number | null; //유저 몸무게
  height: number | null; //유저 키
  image: string | null; // 유저 프로필 사진
};
const user: User = {
  id: 1,
  name: '황인서',
  nickName: 'sjsjsj1246',
  email: 'test@gmail.com',
  token: null,
  weight: 50,
  height: 190,
  image: '',
};

type Token = { token: string; expiresIn: string };

//room
type Room = {
  id: number; //방 아이디
  roomImage: string | null; //모여런 이미지
  title: string; //방 제목
  status: 'Open' | 'Close'; //현재 방이 열려있는지 여부
  description: string | null; // 방 설명
  limitMember: number; //인원 제한
  startDate: string; //모여런 시작 일시 ISOString
  targetDistance: number; //모여런 목표 거리 Km단위
  targetTime: number; //모여런 목표 시간 밀리세컨드 단위
  multiRoomMember: Array<{
    roomId: Room['id'];
    userId: User['id'];
    runId: number | null;
    rank: number | null;
    isOwner: boolean;
    isReady: boolean;
    multiRoomUser: Partial<User>;
  }>; //참가 유저 리스트
};

const room: Room = {
  id: 2,
  roomImage: '',
  title: '테스트',
  status: 'Open',
  description: '음',
  startDate: '2021-11-1T13:30:00.000Z',
  targetDistance: 1,
  targetTime: 2700000,
  limitMember: 7,
  multiRoomMember: [
    {
      roomId: 2,
      userId: 8,
      runId: null,
      rank: null,
      isOwner: true,
      isReady: false,
      multiRoomUser: {
        id: 1,
        name: '비둘기',
        email: 'sjsjsj1246@naver.com',
        nickName: 'sjsjsj1246',
        image:
          'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
      },
    },
    {
      roomId: 2,
      userId: 8,
      runId: null,
      rank: null,
      isOwner: false,
      isReady: false,
      multiRoomUser: {
        id: 2,
        name: '뻐꾸기',
        email: 'sjsjsj1246@naver.com',
        nickName: 'sjsjsj1246',
        image:
          'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
    },
    {
      roomId: 2,
      userId: 8,
      runId: null,
      rank: null,
      isOwner: false,
      isReady: true,
      multiRoomUser: {
        id: 3,
        name: '까치',
        email: 'sjsjsj1246@naver.com',
        nickName: 'sjsjsj1246',
        image:
          'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80',
      },
    },
  ],
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
}; //moyeoRun
type Point = {
  latitude: number; //현재 위치의 위도
  longitude: number; //현재 위치의 경도
  currentAltitude: number; //현재 위치의 고도
  currentTime: number; //누적 시간
  currentDistance: number; //누적 거리
  momentPace: number; //순간 페이스
};

type RunData = Array<Point>;
const runData: RunData = [
  {
    latitude: 37.659187827620975,
    longitude: 127.0514252126567,
    currentAltitude: 30,
    currentTime: 1234567,
    currentDistance: 3.23,
    momentPace: 6.12,
  },
];

type RunStatus = {
  time: number; //러닝 시간
  distance: number; //총 러닝 거리
  pace: number; //평균 러닝 페이스
};
const runStatus: RunStatus = { time: 0, distance: 0, pace: 0 };

type MyRunData = {
  user: Partial<User>;
  runStatus: RunStatus;
  runData: RunData;
};

type OthersRunData = Array<{
  user: Partial<User>;
  runStatus: RunStatus;
  runData: RunData;
}>;
const othersRunData: OthersRunData = [
  {
    user: {
      id: 1,
      name: '비둘기',
      email: 'sjsjsj1246@naver.com',
      nickName: 'sjsjsj1246',
      image:
        'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
    },
    runStatus: { time: 0, distance: 0, pace: 0 },
    runData: [
      {
        latitude: 37.659187827620975,
        longitude: 127.0514252126567,
        currentAltitude: 30,
        currentTime: 1234567,
        currentDistance: 3.23,
        momentPace: 6.12,
      },
    ],
  },
  {
    user: {
      id: 1,
      name: '비둘기',
      email: 'sjsjsj1246@naver.com',
      nickName: 'sjsjsj1246',
      image:
        'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
    },
    runStatus: { time: 0, distance: 0, pace: 0 },
    runData: [
      {
        latitude: 37.659181827620975,
        longitude: 127.0514242126567,
        currentAltitude: 28,
        currentTime: 1234657,
        currentDistance: 3.12,
        momentPace: 6.01,
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
        momentPace: 0,
        currentTime: 0,
        currentAltitude: 0,
      },
    ],
    [
      {
        latitude: 37.52818511648284,
        longitude: 127.07127183483387,
        currentDistance: 0,
        momentPace: 0,
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
      momentPace: 0,
      currentTime: 0,
      currentAltitude: 0,
    },
    {
      latitude: 37.52818511648284,
      longitude: 127.07127183483387,
      currentDistance: 0,
      momentPace: 0,
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

type RunHistory = {
  totalTime: number;
  totalDistance: number;
  totalAveragePace: number;
  analysisRunningListBetweenTerm: RunStatistics;
  runningList: Array<RunRecord>;
};

const recordList: RunHistory = {
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
            momentPace: 0,
            currentTime: 0,
            currentAltitude: 0,
          },
        ],
      ],
    },
  ],
};

type NotificationContent = {
  title: string | null;
  body: string | null;
  data: object | null;
  token: string;
};

type WebviewPath =
  | 'homeTab'
  | 'recordTab'
  | 'runningTab'
  | 'missionTab'
  | 'friendTab'
  | 'recordAnalysis'
  | 'recordDetail'
  | 'readySingleRun'
  | 'singleRunOnlyMap'
  | 'createMultiRoom'
  | 'multiRoom'
  | 'multiRun'
  | 'bodyInfo'
  | 'uploadProfile'
  | 'uploadBodyInfo'
  | 'uploadNickName'
  | 'myPage';

type RecordTabProps = {
  singleRunHistory: RunHistory;
  multiRunHistory: RunHistory;
};

// 소켓 관련 타입

type SocketJoin = {
  userId: User['id'];
};

type SocketWelcome = {
  roomId: Room['id'] | null;
  status: 'Open' | 'running' | 'Close' | null;
};

type SocketReady = {
  roomId: Room['id'];
  user: User;
};

type SocketPrepareType = string;

type SocketRoomStatus = {
  connectedUserId: Array<{
    userId: User['id'];
    roomId: Room['id'];
    isOwner: boolean;
    isReady: boolean;
  }>; //현재 대기중인 유저 목록
};

type SocketStart = {
  message: string;
  roomId: Room['id'];
};

type SocketReadyError = {
  error: any;
};

type SocketRunData = {
  userId: User['id'];
  roomId: Room['id'];
  runData: RunData;
};

type SocketRunBroadCast = {
  userId: User['id'];
  runData: RunData;
};

type SocketFinish = string;
