import { createReducer, on } from '@ngrx/store';
import { Photo, Post } from './photo-modal';
import { retrievedGalleryList,retrievedPostList } from './photo.action';

export const initialState: ReadonlyArray<Photo> = [];
export const initialState1: ReadonlyArray<Post> = [];

const _galleryReducer = createReducer(
  initialState,
  on(retrievedGalleryList, (state, { allGallery }) => {
    return [...allGallery];
  })
);

const _postReducer = createReducer(
  initialState1,
  on(retrievedPostList, (state, { allPost }) => {
    return [...allPost];
  })
);

export function galleryReducer(state: any, action: any) {
  return _galleryReducer(state, action);
}

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}