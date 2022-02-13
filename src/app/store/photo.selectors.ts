import { createSelector } from '@ngrx/store';
import { Photo } from './photo-modal';

import { AppState } from './app.state';

export const gallerySelector =(state: AppState) => state.gallery;

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