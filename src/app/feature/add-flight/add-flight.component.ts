import { Component, OnInit } from '@angular/core';
import { AddFlightService } from './add-flight.service';

interface FlightData{
  flightNumber: string;
  airPortName: string;
  source: string;
  dstn: string;
  deptDate: string;
  seats: string;
  cost: string
}

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss'],
  providers: [AddFlightService]
})
export class AddFlightComponent implements OnInit {

  public flightData: FlightData = {
    flightNumber: '',
    airPortName: '',
    source: '',
    dstn: '',
    deptDate: '',
    seats: '',
    cost: ''
  };
  successMsg='';
  openSuccessModal=false;
  constructor(private addFlightService: AddFlightService) { }

  ngOnInit(): void {
  }
  onAdd(){
    let formData= {
      flightNumber: this.flightData.flightNumber,
      airline: this.flightData.airPortName,
      deptDateTime: this.flightData.deptDate,
      availableSeats: this.flightData.seats,
      ticketCost: this.flightData.cost

    };
    this.addFlightService.addFlight({source: this.flightData.source, dest: this.flightData.dstn, formData: formData}).subscribe((data: any)=>{
      
      console.log(data);
      this.successMsg=data.message;
      this.openSuccessModal=true;
      // this.userData = data;
    });
  }

}
