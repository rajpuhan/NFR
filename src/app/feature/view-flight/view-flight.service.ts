import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewFlightService {

  constructor(private httpClientService: HttpClient) { }
  getFlightDetails(){
      // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
                    // };
      return this.httpClientService.get<any>('/viewflight');
  }
}
