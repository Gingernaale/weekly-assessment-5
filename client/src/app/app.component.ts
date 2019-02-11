import { Component, Output, EventEmitter } from '@angular/core';
import { ServeService } from '../serve.service';
import { Topic } from './topic';
import { Dashboard } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output()
  votes = new EventEmitter<boolean>();

  title = 'Codemocracy';

  onImgClick() {
    alert("Please enter desired topic!")
  }
  constructor() {}

  voteUp() {
    this.votes.emit(true);
  }

  voteDown() {
    this.votes.emit(false);
  }
  votes(like: boolean) {
    if (voteUp) {
      this.topic.vote++;
    } else {
      this.topic.vote--;
    }
  }
}
