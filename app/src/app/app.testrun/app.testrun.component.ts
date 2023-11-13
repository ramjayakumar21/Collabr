import { Component } from '@angular/core';

@Component({
  selector: 'testrun',
  templateUrl: './app.testrun.component.html',
  styleUrls: ['./app.testrun.component.css']
})
export class AppTestrunComponent {

  public count : number;
  public props = "test props";

  constructor() {
    this.count = 0
  }

  public incrementCount() {
    this.count += 1;
    console.log(this.props)
  }

}
 