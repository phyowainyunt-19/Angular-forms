import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue']
  topicHasError = true;

  //useModel
  userModel = new User('Pwn', 'pwn@test.com', 5555599999, 'default', 'morning', false);

  //validate topic
  validateTopic(value) {
    value === 'default' ? this.topicHasError = true : this.topicHasError = false;
  }
}
