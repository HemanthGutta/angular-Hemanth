import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Photo} from './store/photo-modal';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
 data = [
   {employeeId:1,employeeName:"hemanth",employeeAge:30},
   {employeeId:1,employeeName:"hemanth",employeeAge:30},
   {employeeId:1,employeeName:"hemanth",employeeAge:30}
 ]
  constructor(private http: HttpClient) {
  }
  loadGallery() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(map((albums) => albums || []));
  }

}