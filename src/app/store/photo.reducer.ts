import {createReducer, on} from '@ngrx/store';
import {loadPhotosSuccess} from './photo.action';
import {Photo} from './photo-modal';
export interface PhotoState {
  [id: string]: Photo;
}

export const photoFeatureKey = 'photo';

export interface PhotoRootState {
  [photoFeatureKey]: PhotoState;
}

const initialState: PhotoState = {};
export const photoReducer = createReducer(
  initialState,
  on(loadPhotosSuccess, (state, {photos}) => photos.reduce((acc, photo) => ({
    ...acc,
    [photo.id]: photo
  }), {}))
);