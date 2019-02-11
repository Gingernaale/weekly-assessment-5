import { Component, OnInit } from '@angular/core';
import { Topic } from './../topic';
import { ServeService } from '../serve.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private topic: Topic[];
  // private vote: number;
    constructor(private service: ServeService) { }

    addTopic(top: string): void {
      this.service.addTopic(top).subscribe((data: any) => {
        this.topic.push(data);
      })
    }
  ngOnInit() {
  }
}
