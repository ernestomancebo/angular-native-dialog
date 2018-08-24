import {
  Component, OnInit, Input,
  ViewChild, ElementRef, Output,
  EventEmitter
} from '@angular/core';
import * as dialogPolyfill from 'dialog-polyfill/dialog-polyfill';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input()
  notification: Notification;
  @Output()
  close: EventEmitter<any> = new EventEmitter();

  @ViewChild('leDialog')
  private dialogElement: ElementRef;
  private nativeDialogElement: any;

  ngOnInit() {
    dialogPolyfill.registerDialog(this.dialogElement.nativeElement);
    this.nativeDialogElement = this.dialogElement.nativeElement;
    this.nativeDialogElement.showModal();
  }

  cancelClicked() {
    this.nativeDialogElement.close('Cancel Clicked');
  }

  okClicked() {
    this.nativeDialogElement.close('Ok Clicked');
  }

  handleClose(event: any) {
    this.close.emit({ returnValue: event.target.returnValue });
    // somehow when closing with arguments, safari broke up.
    this.nativeDialogElement.close();
  }
}
