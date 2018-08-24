import {
  Component, ViewChild, ViewContainerRef,
  ComponentFactory, OnDestroy, ComponentRef,
  ComponentFactoryResolver, EventEmitter
} from '@angular/core';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  @ViewChild('dialogContainer', { read: ViewContainerRef })
  private containerComponent;
  private dialogContainerRef: ComponentRef<DialogComponent>;
  private closeEmitterListener: EventEmitter<any>;
  dialogResult = '';

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
    this.dialogContainerRef.destroy();

    if (this.closeEmitterListener) {
      this.closeEmitterListener.unsubscribe();
    }
  }

  displayDialog(notification: Notification) {
    this.containerComponent.clear();
    const factory: ComponentFactory<DialogComponent> = this.resolver.resolveComponentFactory(DialogComponent);
    this.dialogContainerRef = this.containerComponent.createComponent(factory);

    this.dialogContainerRef.instance.notification = notification;
    // Subscribes to the close EventEmitter and listens to the value returned by the dialog
    this.dialogContainerRef.instance.close.subscribe(value => {
      this.dialogResult = value.returnValue;
    });
  }
}
