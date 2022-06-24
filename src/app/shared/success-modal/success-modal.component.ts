import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  @Input() openModal!: boolean;
  @Input() message!: string;
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(){
    this.openModal = false;
  }
}
