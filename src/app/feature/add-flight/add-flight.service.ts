import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddFlightService {

  constructor(private httpClientService: HttpClient) { }

  addFlight(reqData: any){
    const data = reqData.formData;
      // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const url = `/addflight?srcAirport=${reqData.source}&dstnAirport=${reqData.dest}`;
      return this.httpClientService.post<any>(url, data);
  }
}
