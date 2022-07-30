import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue']

  //useModel
  userModel = new User('Pwn', 'pwn@test.com', 5555599999, '','morning', false);
}
