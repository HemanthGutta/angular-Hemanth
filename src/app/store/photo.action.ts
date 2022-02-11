import {createAction, props} from '@ngrx/store';
import {Photo} from './photo-modal';

export const loadPhotos = createAction('[Photo List] Load Photos');
export const loadPhotosSuccess = createAction('[Photo List] Load Photos Success', props<{photos: Photo[]}>());
export const loadPhotosError = createAction('[Photo List] Load Photos Error');