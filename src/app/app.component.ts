import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { MessageList } from './models';
import { DomSanitizer } from '@angular/platform-browser';

// import { trigger, keyframes, animate, transition } from '@angular/animations';
// import * as kf from './keyframes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // animations: [
  //   trigger('cardAnimator', [
  //     transition('* => slideOutRight', animate(1000, keyframes(kf.slideOutRight)))
  //   ])
  // ]
})
export class AppComponent {
  title = 'app';
  loadingMore = false;
  messageList: MessageList = null;
  animationState: string;

  constructor(private messageService: MessagesService, private sanitizer: DomSanitizer) {
    messageService.getMessages().subscribe(result => {
      this.messageList = result;
      // in our case, messages come back in order - if they were to need
      // sorting - use this:
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

  // startAnimation(state) {
  //   console.log(state);
  //   if (!this.animationState) {
  //     this.animationState = state;
  //   }
  // }

  // resetAnimationState() {
  //   this.animationState = '';
  // }

  removeMessage(id: number, action) {
    console.log(id);
    console.log(this.messageList.messages[id]);
    this.messageList.messages.splice(id, 1);
  }
}
