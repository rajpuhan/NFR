import { Component, OnInit } from '@angular/core';
import { AddAirportService } from './add-airport.service';
interface AirPortData{
  airportCode: string;
  airportState: string;
  airportName: string;
}
@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.scss']
})
export class AddAirportComponent implements OnInit {
  public airPortDetails: AirPortData = {
    airportCode: '',
    airportState: '',
    airportName: ''
  }
  successMsg: string='';
  openSuccessModal: boolean=false;
  constructor(private addAirPortService: AddAirportService) { }

  ngOnInit(): void {
  }
  onAdd(){
    let formData= {
      airportCode: this.airPortDetails.airportCode,
      airportState: this.airPortDetails.airportState,
      airportName: this.airPortDetails.airportName

    };
    this.addAirPortService.addAirPort(formData).subscribe((data: any)=>{
      this.airPortDetails = {
        airportCode: '',
    airportState: '',
    airportName: ''
      };
      console.log(data);
      this.successMsg=data.message;
      this.openSuccessModal=true;
      // this.userData = data;
    });
  }
}
