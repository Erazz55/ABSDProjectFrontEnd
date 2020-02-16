import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../shopDTO/item';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {noUndefined} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  // readonly baseUrl = environment.apiUrl + '/api/item';

  constructor(private http: HttpClient) {
  }

  saveItem(formData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:8080/absd/api/item', formData);
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/absd/api/item');
  }

}
