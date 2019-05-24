import {Component} from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  public cl = 'blue';
  public addStatus = false;

  constructor() {
    setInterval(() => {
      this.cl = (this.cl === 'blue') ? 'red' : 'blue';
    }, 2000);
  }

  or() {
    console.log('then');
    this.addStatus = true;
  }

}
