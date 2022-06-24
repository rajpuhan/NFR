import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  @Input() openModal!: boolean;
  @Input() message!: string;

  doOpenModal!: boolean
  constructor() { }

  ngOnInit(): void {
    this.doOpenModal = this.openModal;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.doOpenModal = changes.openModal.currentValue;
  }
  closeModal(){
    this.doOpenModal = false;
  }
}
