import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showModal = true;

  constructor(public modal: ModalService) {}

  // ngOnInit() {
  //   setInterval(() => {
  //     this.showModal = !this.showModal;
  //     console.log(this.modal.modals);
  //   }, 1000);
  // }
}
