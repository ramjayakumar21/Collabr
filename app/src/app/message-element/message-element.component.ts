import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-element',
  templateUrl: './message-element.component.html',
  styleUrls: ['./message-element.component.css']
})
export class MessageElementComponent {

  @Input() message: any;
  public color: any = "inital";

  constructor() {
    
  }
  

  ngOnInit() {
    console.log("sau", this.message.author)
    let name = String(this.message.author);
    this.color = Math.floor(name.length*16777215).toString(16); // object here
  }
}
