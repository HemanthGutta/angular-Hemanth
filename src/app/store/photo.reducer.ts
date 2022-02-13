import { createReducer, on } from '@ngrx/store';
import { Photo } from './photo-modal';
import { retrievedGalleryList } from './photo.action';

export const initialState: ReadonlyArray<Photo> = [];

const _galleryReducer = createReducer(
  initialState,
  on(retrievedGalleryList, (state, { allGallery }) => {
    return [...allGallery];
  })
);

export function galleryReducer(state: any, action: any) {
  return _galleryReducer(state, action);
}