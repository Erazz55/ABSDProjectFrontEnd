import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShopLoginDTO} from '../shopDTO/shop-login-dto';
import {Shop} from '../shopDTO/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  saveShop(shop: Shop): Observable<any> {
    return this.http.post<any>('http://localhost:8080/absd/api/shopAuthentication/register', shop);
  }

  authentication(dto: ShopLoginDTO): Observable<any> {
    return this.http.post<any>('http://localhost:8080/absd/api/shopAuthentication/authenticate', dto);
  }

  getAllShops(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/absd/api/shopAuthentication/retriveShops');
  }

  // getShopDetail(email: string): Observable<any> {
  //   return this.http.get<any>('http://localhost:8080/absd/api/shopAuthentication/retriveShop/' + email);
  // }
}
