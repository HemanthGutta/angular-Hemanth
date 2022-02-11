import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from './store/photo-modal';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
 
  constructor(private http: HttpClient) {
  }

 

}