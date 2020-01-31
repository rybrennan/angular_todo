import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-crash-todo';
  name:string = 'Ryan'

  constructor() {
    this.changeName('Michelle ')
  }

  changeName(name:string) {
    this.name = name;
  }
}

