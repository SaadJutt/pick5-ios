import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-history-modal',
  templateUrl: './playing-history-modal.component.html',
  styleUrls: ['./playing-history-modal.component.scss'],
})
export class PlayingHistoryModalComponent  implements OnInit {
  isConcert = [
    {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'The Simon - 18-2-2021',
    score: '56/100'
  },
  {
    concertDate: 'Bearly  Dead - 18-2-2021',
    score: '56/100'
  }
];

  constructor() { }

  ngOnInit() {}

}
