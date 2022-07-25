import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  showChat = true;
  userLogged: any;
  newMessage: string = "";
  messages: any = [
    {
      transmitter: "id",
      text: "Hello"
    },
    {
      transmitter: "id",
      text: "Hi"
    },
    {
      transmitter: "1odysoXd0AgQH3z2OlbYGXh2qAh2",
      text: "dxdasd"
    },
    {
      transmitter: "id",
      text: "XDDDD"
    }
  ];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(user => {
      this.userLogged = user;
    });
  }

  sendMessage() {

    if (this.newMessage == "") return;

    console.log(this.newMessage);
    let message = {
      transmitter: this.userLogged.uid,
      text: this.newMessage
    }
    this.messages.push(message);
    this.newMessage = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10);
  }

  scrollToTheLastElementByClassName() {
    let elements = document.getElementsByClassName('msj');
    let last: any = elements[(elements.length - 1)];
    let toppos = last.offsetTop;

    //@ts-ignore
    document.getElementById('messageContainer')?.scrollTop = toppos;
  }
}
