import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ViewAirportService {

  constructor(private httpClientService: HttpClient) { }
  getAirportDetails(){
      // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      return this.httpClientService.get<any>('/viewairport');
  }
}
