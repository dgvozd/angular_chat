import { IMessageModel } from '../../interfaces/imessage.model';
import { LoginService } from '../../services/login.service';

class ChatComponentController {
  public chatMessages: IMessageModel[];
  private userName: string;
  public message: string;
  private randomMessages: IMessageModel[];

  constructor(public loginService: LoginService, public $interval: ng.IIntervalService) {
    this.chatMessages = [];
    this.userName = loginService.getUserName();
    this.initRandomMessages();
  }

  public addMessage(messageContent: string): void {
    var msg: IMessageModel = {
      Author: this.userName,
      Time: new Date(),
      Content: messageContent
    };
    this.chatMessages.push(msg);
    this.message = null;

    var audio = new Audio('./app/audio/song.mp3');
    audio.play();
  }

  private initRandomMessages(): void {
    var _this = this;
    this.randomMessages = JSON.parse('[	{		"Author": "User1",		"Content": "hi here1"	},    {		"Author": "User2",		"Content": "hi here2"	},    {		"Author": "User3",		"Content": "hi here3"	},    {		"Author": "User4",		"Content": "hi here4"	}]');
    var stopTime = this.$interval(function () {
      var msg = _this.randomMessages[Math.floor(Math.random() * _this.randomMessages.length)];
      msg.Time = new Date();
      _this.chatMessages.push(msg);
    }, 4000);
  }
}

export const chatComponent: angular.IComponentOptions = {
  template: require('./chat.component.html'),
  controller: ChatComponentController
};