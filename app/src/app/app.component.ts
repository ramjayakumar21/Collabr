import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MessageElementComponent } from './message-element/message-element.component';


declare let SockJS: any;
declare let Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('content') content : any;

  public messageList: any[] = [];
  title = 'app';
  public signedIn = false;

  signUpForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  sendMessageForm = this.formBuilder.group({
    content: '',
  });

  constructor(private formBuilder: FormBuilder, private elRef:ElementRef) {
    this.messageList.push('test')
    this.messageList.push('test2')
  }

  public stompClient: any;
  public msg = [];
  public username: any = "";



  signIn(): void {

    if (this.signUpForm.value.name == undefined || this.signUpForm.value.password == undefined) {
      window.alert("Please fill out form!")
    }

    if (this.username != undefined) {
      this.username = this.signUpForm.value.name;
    }

    let serverUrl = 'http://localhost:8080/ws';

    if (this.username) {
      let socket = new SockJS(serverUrl);
      
      this.stompClient = Stomp.over(socket);
      console.log("1", this.stompClient)

      let headers = {};
      this.stompClient.connect(
        {},
        () => {
          console.log(this.stompClient)
          // Subscribe to the Public Topic
          this.stompClient.subscribe('/topic/public', this.onMessageReceived.bind(this));

          // Tell your username to the server
          this.stompClient.send("/app/chat.register",
              {},
              JSON.stringify({author: this.username, type: 'JOIN'})
          )

          this.signedIn = true;

          // this.elRef.nativeElement.querySelector('div').classList.add('hidden');
        },
        () => console.log('connect fail')
      );
    }
  }

  sendMessage() : void {
    let messageInput = this.sendMessageForm.value.content || "no content found"
    let messageContent = messageInput.trim();
    if(messageContent && this.stompClient) {
        let chatMessage = {
            author: this.username,
            content: messageContent,
            type: 'CHAT'
        };
        this.stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));

    }
}

  onMessageReceived(payload : any) {
    //let messageArea = this.elRef.nativeElement.querySelector('.textarea')
    //console.log('messageArea', messageArea)
    console.log("this", this)
    var message = JSON.parse(payload.body);

    var messageElement = document.createElement('li');

    if(message.type === 'JOIN') {
        messageElement.classList.add('event-message');
        message.content = message.author + ' joined!';
    } else if (message.type === 'LEAVE') {
        messageElement.classList.add('event-message');
        message.content = message.author + ' left!';
    } else {
        messageElement.classList.add('chat-message');

    }

    console.log('message', message)
    let newList = [...this.messageList, message]
    this.messageList = newList
  }
}
