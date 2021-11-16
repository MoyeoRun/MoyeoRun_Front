import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as imageAPI from '../lib/api/image';

const UPLOAD_IMAGE = 'images/UPLOAD_IMAGE';

export const uploadImage = createAction(UPLOAD_IMAGE, imageAPI.uploadImage);

type ImageState = {
  image: string | null;
};

const initialState: ImageState = {
  image: null,
};

export default handleActions<ImageState, any>(
  {
    ...pender({
      type: UPLOAD_IMAGE,
      onSuccess: (state, { payload: image }) => ({
        ...state,
        image,
      }),
    }),
  },
  initialState,
);
