import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GalleryEffect } from './store/photo.effects';
import { galleryReducer } from './store/photo.reducer';
import { environment } from '../environments/environment';
import { PhotoService } from './photo.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    EffectsModule.forRoot([GalleryEffect]),
    StoreModule.forRoot({ gallery: galleryReducer })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent
  ],
  providers: [PhotoService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/