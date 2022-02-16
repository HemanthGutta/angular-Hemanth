import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PhotoService } from '../photo.service';

import { products } from '../products';
import { Photo,Post } from '../store/photo-modal';
import { retrievedGalleryList, invokeGalleryAPI, invokePostAPI } from '../store/photo.action';
import {
  uniqueAlbumIds,
  albumCollectionByAlbumId,
postData,
} from '../store/photo.selectors';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
}) 
export class ProductListComponent {
  products = products;
  constructor(
    private store: Store<{ gallery: Photo[],post: Post[] }>,
    private galleryService: PhotoService
  ) {}
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  );
  allPost$ = this.store.pipe(select(postData));
  share() {
    window.alert('The product has been shared!');
  }
  ngOnInit(): void {
    this.store.dispatch(invokeGalleryAPI());
    this.store.dispatch(invokePostAPI());
    // this.galleryService.loadGallery().subscribe((gallery) => {
    //   console.log(gallery);
    //   this.store.dispatch(
    //     retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
    //   );
    // });
  }
  albumChange(event:number) {
    this.allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/