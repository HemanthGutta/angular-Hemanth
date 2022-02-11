import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { loadPhotosError, loadPhotosSuccess } from './photo.action';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PhotoEffects {
  constructor(private actions$: Actions) {}
}
