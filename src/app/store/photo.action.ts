import { createAction, props } from '@ngrx/store';
import { Photo, Post } from './photo-modal';

export const retrievedGalleryList = createAction(
  '[Gallery API] Gallery API Success',
  props<{ allGallery: Photo[] }>()
);

export const retrievedPostList = createAction(
  '[Post API] Post API Success',
  props<{ allPost: Post[] }>()
);
export const invokeGalleryAPI = createAction('[Gallery API] Invoke API');
export const invokePostAPI = createAction('[Post API] Invoke API');
