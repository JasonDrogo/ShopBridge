
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private _http: HttpClient ) {}

  public getAllItems():Observable<any>{
return this._http.get<any>('http://localhost:3000/data');
  }

  public uploadItem(data:any):Observable<any>{
    return this._http.post<any>("http://localhost:3000/postData",data);
  }
  public uploadToShippingCart(data:any):Observable<any>{
    return this._http.post<any>("http://localhost:3000/postToShopping",data)
  }
  public getdataShoppingCart():Observable<any>{
    return this._http.get<any>('http://localhost:3000/getShoppingCart');
    }
  }

