import { createSelector } from '@ngrx/store';
import { Photo, Post } from './photo-modal';

import { AppState, AppState1 } from './app.state';

export const gallerySelector =(state: AppState) => state.gallery;
export const postSelector =(state: AppState1) => state.post;

export const uniqueAlbumIds = createSelector(
  gallerySelector,
  (gallery: Photo[]) => {
    return [...new Set(gallery.map((_) => _.albumId))];
  }
);

export const albumCollectionByAlbumId = (albumId:number) => createSelector(
    gallerySelector,
    (gallery:Photo[]) => {
        if(albumId == -1){
            return gallery;
        }
        return gallery.filter(_ => _.albumId == albumId);
    }
)

export const postData = createSelector(
  postSelector,
  (post:Post[]) => {
  return post;
  }
) 