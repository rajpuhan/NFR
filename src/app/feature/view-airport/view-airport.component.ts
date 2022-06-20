import { Component, OnInit } from '@angular/core';
import { ViewAirportService } from "./view-airport.service";

@Component({
  selector: 'app-view-airport',
  templateUrl: './view-airport.component.html',
  styleUrls: ['./view-airport.component.scss'],
  providers: [ViewAirportService]
})
export class ViewAirportComponent implements OnInit {

  airportData:any =  [];
  constructor(private viewAirportService: ViewAirportService) { }

  ngOnInit(): void {
    this.viewAirportService.getAirportDetails().subscribe((data)=>{
      // console.log(data);
      this.airportData=[...data];
    });
  }

}
