import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { MessageList } from './models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loadingMore = false;
  messageList: MessageList = null;
  message = { content: 'test' };

  constructor(private messageService: MessagesService, private sanitizer: DomSanitizer) {
    messageService.getMessages().subscribe(result => {
      this.messageList = result;
      // in our case, messages come back in order - if they were to get
      // sorted - use this
      // this.messageList.messages.sort((messageA, messageB) => {
      //    return new Date(messageA.updated).getTime() - new Date(messageB.updated).getTime();
      // });
    });
  }

  onScroll() {
    if (this.messageList.count === 100) {
      // still have not reached limit - fetch more
      this.loadingMore = true;
      this.messageService.getMessages(this.messageList.pageToken).subscribe(result => {
        this.messageList.messages = this.messageList.messages.concat(result.messages);
        this.messageList.pageToken = result.pageToken;
        this.messageList.count = result.count;
        this.loadingMore = false;
      });
      }
  }
}
