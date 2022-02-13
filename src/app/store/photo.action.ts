import { createAction, props } from '@ngrx/store';
import { Photo } from './photo-modal';

export const retrievedGalleryList = createAction(
  '[Gallery API] Gallery API Success',
  props<{ allGallery: Photo[] }>()
);

export const invokeGalleryAPI = createAction('[Gallery API] Invoke API');