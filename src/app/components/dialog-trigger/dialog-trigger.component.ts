import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Notification } from '../../models/notification';

@Component({
  selector: 'app-dialog-trigger',
  templateUrl: './dialog-trigger.component.html',
  styleUrls: ['./dialog-trigger.component.css']
})
export class DialogTriggerComponent implements OnInit {

  @Output()
  triggerDialog: EventEmitter<Notification> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleOpenClick() {
    this.triggerDialog.emit({
      message: 'Dialog Opened',
      title: 'Yaaay'
    });
  }
}
