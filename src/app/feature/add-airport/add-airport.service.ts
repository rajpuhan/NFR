import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAirportService {

  constructor(private httpClientService: HttpClient) { }
  addAirPort(reqData: any){
    const data = reqData.formData;
      // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const url = `/add`;
      return this.httpClientService.post<any>(url, data);
  }
}
