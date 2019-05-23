import {Component} from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent {

  public al = 'left';

  constructor() {
    setTimeout(function() {
      this.al = 'right';
      console.log(this.al);
    }, 5000);
  }

}
