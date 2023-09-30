import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paying-history-modal',
  templateUrl: './paying-history-modal.component.html',
  styleUrls: ['./paying-history-modal.component.scss'],
})
export class PayingHistoryModalComponent  implements OnInit {

  isPayment = [];

  constructor() { 
    this.isPayment.length = 3;
  }

  ngOnInit() {}

}
