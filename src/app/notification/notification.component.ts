import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

displayNotification:boolean = false;

closeNotification(){
  this.displayNotification = true
}

}
