import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cardsData = new Array<any>();
  cardsUniqueUsers = new Array<any>();

  constructor(public myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.getData().subscribe(response => {
        this.cardsData = response;
        this.getGroupingStats();
    });
  }

  getGroupingStats() {
    let uniqueUsers = [...new Set(this.cardsData.map((item)=> item.userId))];
    uniqueUsers.map((obj) => {
      let pending = this.cardsData.filter((item) => { return (item.userId == obj && item.completed == false ) } )
      let completed = this.cardsData.filter((item) => { return (item.userId == obj && item.completed == true ) } )
      this.cardsUniqueUsers.push({
        userId: obj,
        pending: pending?.length ?? 0,
        completed: completed?.length ?? 0
      });
    })
  }
  
}
