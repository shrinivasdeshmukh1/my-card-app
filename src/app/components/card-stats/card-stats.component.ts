import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss']
})
export class CardStatsComponent implements OnInit {

  @Input() cardStats: any;

  constructor() { }

  ngOnInit(): void {
  }

}
