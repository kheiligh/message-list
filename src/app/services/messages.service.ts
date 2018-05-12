import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageList } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messageUrl = 'http://message-list.appspot.com/messages?limit=100';
  constructor(private http: HttpClient) {  }

  /**
   * getMessages
pageToken: string = null   */
  public getMessages(pageToken: string = null): Observable<MessageList> {
    if (pageToken) {
      return this.http.get<MessageList>(this.messageUrl + '&pageToken=' + pageToken);
    } else {
      return this.http.get<MessageList>(this.messageUrl);
    }
  }
}
