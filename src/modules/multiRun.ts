import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as runAPI from '../lib/api/run';

const END_MULTI_RUN = 'multiRun/END_MULTI_RUN';

export const endMultiRun = createAction(END_MULTI_RUN, runAPI.endMultiRun);

type MultiRun = {
  isRunning: boolean;
  roomList: Array<Room> | null;
  roomStatus: RoomStatus | null;
  participantRoom: Room | null;
  myRunData: RunData | null;
  othersRunData: OthersRunData | null;
};

const initialState: MultiRun = {
  isRunning: false,
  roomStatus: null,
  roomList: null,
  participantRoom: null,
  myRunData: null,
  othersRunData: null,
};

export default handleActions<MultiRun, any>(
  {
    ...pender({
      type: END_MULTI_RUN,
    }),
  },
  initialState,
);
