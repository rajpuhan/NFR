import { Component, OnInit } from '@angular/core';
import { ViewFlightService } from "./view-flight.service";

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.scss'],
  providers: [ViewFlightService]
})
export class ViewFlightComponent implements OnInit {
  flightData:any=[];
  constructor(private viewFlightService: ViewFlightService) { }

  ngOnInit(): void {
    this.viewFlightService.getFlightDetails().subscribe((data)=>{
      // console.log(data);
      this.flightData=[...data];
    })
  }

}
