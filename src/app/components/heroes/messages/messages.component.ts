import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messageService.messages.length">

      <div class="p-2">
        <strong>messages:</strong>
        <ul>
          <li *ngFor="let message of messageService.messages">{{message}}</li>
        </ul>
      </div>

      <button class="btn"
        (click)="messageService.clear()"
      >
        clear
      </button>

    </div>
  `,
  styles: [
  ]
})
export class MessagesComponent implements OnInit {

  messages?: string[];

  constructor(
    public messageService: MessagesService
    ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void{
    this.messages = this.messageService.messages;
  }

}
