import { Message } from './message';
export class MessageList {
    public count: number;
    public pageToken: string;
    public messages: Array<Message>;
}
