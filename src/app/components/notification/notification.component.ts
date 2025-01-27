import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeNotification } from '../../notifications/actions';
import { selectAllNotifications } from '../../notifications/selector';
import { Notification } from '../../notifications/reducer';

@Component({
  selector: 'app-notification',
  standalone: false,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notifications$: Observable<Notification[]>;

  constructor(private store: Store) {
    this.notifications$ = this.store.select(selectAllNotifications);
  }

  ngOnInit(): void {}

  removeNotification(id: number) {
    this.store.dispatch(removeNotification({ id }));
  }
}