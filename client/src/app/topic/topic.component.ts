import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  private topic: Topic[];

  constructor(private service: ServeService) { }

  getTopics() {
    this.service.getTopics().subscribe((data: any) => {
      // console.log(data);
      this.topic = data;
    })
  }

  ngOnInit() {
    this.getTopics();
  }

}
